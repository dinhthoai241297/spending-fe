export const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const appName = 'spending';

export const storageKeys = Object.freeze({
    ACCOUNT_REDUCER_CACHE: `${appName}_account-reducer`, // USE_FOR_REFRESH_TOKEN
    USER_DATA: `${appName}_user-data`,
    USER_ACCESS_TOKEN: `${appName}_user-access-token`,
    USER_REFRESH_TOKEN: `${appName}_user-refresh-token`,
    CHECKOUT_TOKEN: `${appName}_checkout-token`,
});

export const eTransactionType = {
    ESTIMATE: 'ESTIMATE',
    ACTUAL: 'ACTUAL',
}

export const eTransactionPeriod = {
    DAY: 'DAY',
    MONTH: 'MONTH',
    YEAR: 'YEAR',
}

export const eMoneyMovement = {
    IN: 'IN',
    OUT: 'OUT',
}

export const eTimeRangeDefault = {
    TODAY: 'TODAY',
    LAST_WEEK: 'LAST_WEEK',
    LAST_MONTH: 'LAST_MONTH',
    LAST_3_MONTH: 'LAST_3_MONTH',
}

export const DATE_DISPLAY = 'DD/MM/YYYY';
export const DATE_VALUE = 'YYYY-MM-DD';