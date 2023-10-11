'use client'
import apiConfig from '@/constants/apiConfig';
import { paths } from '@/constants/paths';
import useFetch from '@/hooks/useFetch';
import { Box, Heading } from '@chakra-ui/react';
import { useRouter, useParams } from 'next/navigation';
import { useEffect } from 'react';
import TransactionForm from './transaction-form';

const TransactionSave = () => {
    const { execute } = useFetch(apiConfig.transactions.create);
    const { execute: executeUpdate } = useFetch(apiConfig.transactions.update);
    const { execute: executeGet, data } = useFetch(apiConfig.transactions.get);
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
                push(paths.transactions);
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
                {isCreate ? 'Create Transaction' : 'Update Transaction'}
            </Heading>
            <TransactionForm
                onSubmit={handleSubmit}
                data={data}
                isCreate={isCreate}
            />
        </Box>
    );
};

export default TransactionSave;