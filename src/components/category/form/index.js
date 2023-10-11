'use client'
import apiConfig from '@/constants/apiConfig';
import { paths } from '@/constants/paths';
import useFetch from '@/hooks/useFetch';
import { Box, Heading } from '@chakra-ui/react';
import { useRouter, useParams } from 'next/navigation';
import { useEffect } from 'react';
import CategoryForm from './category-form';

const CategorySave = () => {
    const { execute } = useFetch(apiConfig.categories.create);
    const { execute: executeUpdate } = useFetch(apiConfig.categories.update);
    const { execute: executeGet, data } = useFetch(apiConfig.categories.get);
    const { push } = useRouter();
    const { id } = useParams();

    const isCreate = id === 'create';

    const handleSubmit = (values, actions) => {
        const { id, ...restValues } = values;
        const func = id ? executeUpdate : execute;
        func({
            pathParams: { id },
            data: restValues,
            onCompleted: () => {
                push(paths.categories);
            },
            onError: error => {
                console.log(error);
            }
        });
        actions.setSubmitting(false);
    };

    useEffect(() => {
        if (!isCreate) {
            executeGet({
                pathParams: { id }
            });
        }
    }, [ id ]);

    return (
        <Box py={8}>
            <Heading size="lg" mb={6}>
                {isCreate ? 'Create Category' : 'Update Category'}
            </Heading>
            <CategoryForm
                onSubmit={handleSubmit}
                data={data}
                isCreate={isCreate}
            />
        </Box>
    );
};

export default CategorySave;