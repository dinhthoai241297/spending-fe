import apiConfig from '@/constants/apiConfig';
import useFetch from './useFetch';

const useCategories = () => {
    const { data: categories = [], loading } = useFetch(apiConfig.categories.list, { immediate: true });

    return { categories, loading };
};

export default useCategories;