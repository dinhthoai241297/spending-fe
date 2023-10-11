export const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const appName = 'spending';

export const storageKeys = Object.freeze({
    ACCOUNT_REDUCER_CACHE: `${appName}_account-reducer`, // USE_FOR_REFRESH_TOKEN
    USER_DATA: `${appName}_user-data`,
    USER_ACCESS_TOKEN: `${appName}_user-access-token`,
    USER_REFRESH_TOKEN: `${appName}_user-refresh-token`,
    CHECKOUT_TOKEN: `${appName}_checkout-token`,
});