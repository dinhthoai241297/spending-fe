import { apiUrl } from '.'

const baseHeader = {
    'Content-Type': 'application/json'
}

const multipartFormHeader = {
    'Content-Type': 'multipart/form-data'
}

const noCacheHeader = {
    'Content-Type': 'application/json',
    'cache-control': 'no-cache',
}

const apiConfig = {
    account: {
        login: {
            path: `${apiUrl}/login`,
            method: 'POST',
            headers: baseHeader
        },
        refreshToken: {
            path: `${apiUrl}/refresh-token`,
            method: 'POST',
            headers: baseHeader
        },
    },
    transactions: {
        list: {
            path: `${apiUrl}/transactions`,
            method: 'GET',
            headers: baseHeader
        },
        create: {
            path: `${apiUrl}/transactions`,
            method: 'POST',
            headers: baseHeader
        },
        get: {
            path: `${apiUrl}/transactions/:id`,
            method: 'GET',
            headers: baseHeader
        },
        update: {
            path: `${apiUrl}/transactions/:id`,
            method: 'PUT',
            headers: baseHeader
        },
        delete: {
            path: `${apiUrl}/transactions/:id`,
            method: 'DELETE',
            headers: baseHeader
        },
    }
}

export default apiConfig;
