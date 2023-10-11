import axios from 'axios';
import https from 'https';

import { storageKeys } from '@/constants';
import apiConfig from '@/constants/apiConfig';
import { removeItem } from '@/utils/localStorage';
import { getCacheAccessToken, getCacheRefreshToken, removeCacheToken, setCacheToken } from './userService';

const httpsAgent = new https.Agent({
    rejectUnauthorized: false
});

// Handle refresh token
const axiosInstance = axios.create({
    httpsAgent,
});
let isRefreshing = false;
let subscribers = [];

const onRefreshed = (newAccessToken) => {
    subscribers.map(cb => cb(newAccessToken));
};

const subscribeTokenRefresh = (cb) => {
    subscribers.push(cb);
};

axiosInstance.interceptors.response.use(
    (res) => res,
    async (err) => {
        const originalConfig = err.config;

        if (originalConfig.url !== apiConfig.account.login.baseURL && err.response) {
            // Access Token was expired
            if (err.response?.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;
                if (!isRefreshing) {
                    isRefreshing = true;
                    axiosInstance.post(apiConfig.account.refreshToken.baseURL, {
                        refreshToken: getCacheRefreshToken(),
                    }).then(rs => {
                        const { accessToken, refreshToken } = rs.data.data;
                        setCacheToken(accessToken, refreshToken);
                        isRefreshing = false;
                        onRefreshed(accessToken);
                        subscribers = [];
                    }).catch(_error => {
                        removeCacheToken();
                        removeItem(storageKeys.ACCOUNT_REDUCER_CACHE);
                        window.location.reload();
                        return Promise.reject(_error);
                    });
                }

                return new Promise(resolve => {
                    subscribeTokenRefresh((newAccessToken) => {
                        originalConfig.headers.Authorization = `Bearer ${newAccessToken}`;
                        return resolve(axiosInstance(originalConfig));
                    });
                });
            }
        }
        return Promise.reject(err);
    },
);

const sendRequest = (options, payload, cancelToken) => {
    const { params = {}, pathParams = {}, data = {} } = payload;
    let { method, path, headers, ignoreAuth } = options;

    const userAccessToken = getCacheAccessToken();
    if (!ignoreAuth && userAccessToken) {
        headers.Authorization = `Bearer ${userAccessToken}`;
    }

    // update path params
    for (let key of Object.keys(pathParams)) {
        const keyCompare = `:${key}`;
        if (path.indexOf(keyCompare) !== -1) {
            path = path.replace(keyCompare, pathParams[key]);
        }
    }

    // handle multipart
    // ...

    return axiosInstance.request({
        method,
        baseURL: path,
        headers,
        params,
        data,
        paramsSerializer: {
            indexes: null,
        },
        cancelToken,
    });
};

export { sendRequest };
