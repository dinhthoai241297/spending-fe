'use client'
import { Box, Heading } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { DATE_VALUE } from '@/constants';
import apiConfig from '@/constants/apiConfig';
import { paths } from '@/constants/paths';
import useFetch from '@/hooks/useFetch';
import TransactionForm from './transaction-form';
import useMessage from '@/hooks/useMessage';

const TransactionSave = () => {
    const { showSuccess, showError } = useMessage();
    const { execute } = useFetch(apiConfig.transactions.create);
    const { execute: executeUpdate } = useFetch(apiConfig.transactions.update);
    const { execute: executeGet, data } = useFetch(apiConfig.transactions.get);
    const { push } = useRouter();
    const { id } = useParams();

    const isCreate = id === 'create';

    const handleSubmit = (values, actions) => {
        const { id, ...restValues } = values;
        const func = id ? executeUpdate : execute;
        restValues.category = +restValues.category;
        restValues.amount = +restValues.amount;

        func({
            pathParams: { id },
            data: restValues,
            onCompleted: () => {
                showSuccess('Save transaction success!');
                push(paths.transactions);
            },
            onError: error => {
                showError('Save transaction failed!');
                console.log(error);
            }
        });
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