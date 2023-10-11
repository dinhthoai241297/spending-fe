'use client'

import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

import { paths } from "@/constants/paths";

import apiConfig from "@/constants/apiConfig";
import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";
import TransactionTable from "./transaction-table";

const Transactions = () => {
    const { data: transactions = [], loading, execute } = useFetch(apiConfig.transactions.list);

    useEffect(() => {
        execute({});
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
            <TransactionTable transactions={transactions || []} loading={loading} />
        </Box>
    );
};

export default Transactions;