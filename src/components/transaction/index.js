'use client'

import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";

import { paths } from "@/constants/paths";

import apiConfig from "@/constants/apiConfig";
import useFetch from "@/hooks/useFetch";
import useMessage from "@/hooks/useMessage";
import TransactionTable from "./transaction-table";

const Transactions = () => {
    const { showSuccess } = useMessage();
    const { data, loading, execute } = useFetch(apiConfig.transactions.list);
    const { execute: executeDelete } = useFetch(apiConfig.transactions.delete);
    const { content: transactions } = data || {};

    const getTransactions = () => {
        execute({});
    }

    const handleDelete = id => {
        executeDelete({
            pathParams: { id },
            onCompleted: () => {
                getTransactions();
                showSuccess('Delete transaction success!');
            }
        })
    }

    useEffect(() => {
        getTransactions();
    }, []);

    return (
        <Box py={8}>
            <Flex mb={6} justifyContent="space-between">
                <Heading size="lg">
                    Transactions
                </Heading>
                <Link href={{ pathname: `${paths.transactions}/create` }}>
                    <Button type="submit" colorScheme="teal">
                        Add Transaction
                    </Button>
                </Link>
            </Flex>
            <TransactionTable
                transactions={transactions || []}
                loading={loading}
                handleDelete={handleDelete}
            />
        </Box>
    );
};

export default Transactions;