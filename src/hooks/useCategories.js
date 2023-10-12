import apiConfig from '@/constants/apiConfig';
import useFetch from './useFetch';

const useCategories = () => {
    const { data: categories = [], loading, execute } = useFetch(apiConfig.categories.list, { immediate: true });

    return { categories, loading, execute };
};

export default useCategories;