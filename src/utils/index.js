export const sleep = (time) => new Promise((res) => setTimeout(res, time));

export const delayResult = async (func, time) => new Promise(async (res, reject) => {
    try {
        const result = await Promise.all([func, sleep(time)])
        res(result[0]);
    } catch (error) {
        reject(error);
    }
});

export const formatNumber = (value, defaultValue) => {
    if (value) {
        const decimalPosition = value.toString().indexOf(".");
        if (decimalPosition > 0) {
            const intVal = value.toString().substring(0, decimalPosition);
            const decimalVal = value.toString().substring(decimalPosition + 1);
            return `${intVal.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.${decimalVal}`;
        }
        return value.toString().padStart(2, '0').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return defaultValue ?? "";
};