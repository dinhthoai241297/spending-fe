import { sendRequest } from '@/services/api';
import { useCallback, useEffect, useState } from 'react';
import { delayResult } from '@/utils';

const useFetch = (apiConfig, {
    immediate = false,
    mappingData,
    params = {},
    pathParams = {},
    delay = 0,
    initialData = null,
    useError = false,
    useData = true,
} = {}) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(initialData);
    const [error, setError] = useState(null);

    const execute = useCallback(async ({ onCompleted, onError, ...payload } = {}) => {
        setLoading(true);
        useError && setError(null);
        try {
            const { data } = await delayResult(sendRequest(apiConfig, { params, pathParams, ...payload }), delay);

            useData && setData(mappingData ? mappingData(data) : data?.data);
            onCompleted?.(data);
            return data;
        } catch (error) {
            useError && setError(error);
            onError?.(error);
            console.log({ error });
            return error;
        } finally {
            setLoading(false);
        }
    }, [],);

    useEffect(() => {
        if (immediate) {
            execute();
        }
    }, [immediate]);

    return { loading, execute, data, error, setData };
};

export default useFetch;
