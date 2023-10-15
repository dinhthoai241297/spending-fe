export const sleep = (time) => new Promise((res) => setTimeout(res, time));

export const delayResult = async (func, time) => new Promise(async (res, reject) => {
    try {
        const result = await Promise.all([func, sleep(time)])
        res(result[0]);
    } catch (error) {
        reject(error);
    }
});

export const formatNumber = (value) => {
    if (value === 0) {
        return 0;
    }

    if (value) {
        const decimalPosition = value.toString().indexOf('.');
        if (decimalPosition > 0) {
            const intVal = value.toString().substring(0, decimalPosition);
            const decimalVal = value.toString().substring(decimalPosition + 1);
            return `${intVal.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.${decimalVal}`;
        }
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return '';
}

export const getLabel = (options, value) => {
    return options.find(el => el.value === value)?.label || '';
}

export const cleanObject = (obj) => {
    let result = {};
    if (obj) {
        Object.keys(obj).forEach((key) => {
            const fieldValue = obj[key];
            if ((Array.isArray(fieldValue) && fieldValue.length) || (fieldValue !== 0 && !!fieldValue)) {
                result[key] = fieldValue;
            }
        });
    }
    return result;
};
