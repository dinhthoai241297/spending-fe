'use client'

import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import dayjs from "dayjs";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "qs";
import { useEffect, useMemo } from "react";

import { DATE_VALUE } from "@/constants";
import apiConfig from "@/constants/apiConfig";
import { paths } from "@/constants/paths";
import useFetch from "@/hooks/useFetch";
import useMessage from "@/hooks/useMessage";
import { cleanObject } from "@/utils";

import Pagination from "../common/pagination";
import TransactionFilter from "./filter";
import TransactionTable from "./transaction-table";

const pageSize = 20;

const Transactions = () => {
    const { showSuccess } = useMessage();
    const { data, loading, execute } = useFetch(apiConfig.transactions.list, { delay: 180 });
    const { execute: executeDelete } = useFetch(apiConfig.transactions.delete);
    const { content: transactions, totalElements } = data || {};
    const params = useSearchParams();
    const pathname = usePathname();
    const { push } = useRouter();
    const filter = useMemo(() => {
        const paramsObj = Object.fromEntries(params.entries());
        const { page = 1, size = pageSize, ...rest } = paramsObj;
        return { page: +page, size, ...rest };
    }, [params]);

    const mapTimeRangeToFilterDate = (timeRange) => {
        if (!timeRange) {
            return {};
        }

        const currentDate = dayjs();
        const mapper = {
            TODAY: currentDate.format(DATE_VALUE),
            LAST_WEEK: currentDate.subtract(7, 'd').format(DATE_VALUE),
            LAST_MONTH: currentDate.subtract(1, 'M').format(DATE_VALUE),
            LAST_3_MONTH: currentDate.subtract(3, 'M').format(DATE_VALUE),
        }

        return {
            start_date: mapper[timeRange]
        };
    }

    const getTransactions = () => {
        const { page, time_range, ...rest } = filter;
        const filterDate = mapTimeRangeToFilterDate(time_range);
        execute(cleanObject({
            params: {
                page: +page - 1,
                ...filterDate,
                ...rest
            }
        }));
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

    const pushFilter = filter => {
        push(`${pathname}?${qs.stringify(cleanObject(filter))}`);
    }

    const handlePageChange = page => {
        pushFilter({
            ...filter,
            page,
        });
    }

    const handleChangeFilter = filterNew => {
        pushFilter({
            ...filter,
            ...filterNew,
            page: 1,
        });
    }

    useEffect(() => {
        getTransactions();
    }, [filter]);

    return (
        <Box py={8}>
            <Flex gap={8} direction="column">
                <Flex justifyContent="space-between">
                    <Heading size="lg">
                        Transactions
                    </Heading>
                    <Link href={{ pathname: `${paths.transactions}/create` }}>
                        <Button type="submit" colorScheme="green">
                            Add Transaction
                        </Button>
                    </Link>
                </Flex>
                <TransactionFilter initialValues={filter} onFilterChange={handleChangeFilter} />
                <TransactionTable
                    transactions={transactions || []}
                    loading={loading}
                    handleDelete={handleDelete}
                />
                <Flex justifyContent="flex-end">
                    <Pagination
                        current={filter.page}
                        total={totalElements}
                        hideOnSinglePage
                        pageSize={filter.size}
                        onChange={handlePageChange}
                    />
                </Flex>
            </Flex>
        </Box>
    );
};

export default Transactions;