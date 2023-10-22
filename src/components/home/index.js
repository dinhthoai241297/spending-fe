'use client'

import { DATE_VALUE, eMoneyMovement, eTimeRangeDefault, eTransactionType } from '@/constants';
import apiConfig from '@/constants/apiConfig';
import { timeRangeSummaryOptions } from '@/constants/master-data';
import useFetch from '@/hooks/useFetch';
import { formatNumber } from '@/utils';
import { Box, Center, SimpleGrid, Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useMemo } from 'react';
import SelectField from '../common/form/select-field';
import StatisticsByCategory from './statistics-by-category';

const getFilterDate = (timeRange) => {
    if (timeRange === eTimeRangeDefault.TODAY) {
        return dayjs().format(DATE_VALUE);
    }

    if (timeRange === eTimeRangeDefault.THIS_WEEK) {
        return dayjs().startOf('W').format(DATE_VALUE);
    }

    if (timeRange === eTimeRangeDefault.THIS_MONTH) {
        return dayjs().startOf('M').format(DATE_VALUE);
    }
}

const Home = () => {
    const { data, loading, execute } = useFetch(apiConfig.transactions.summary, { delay: 180 });
    const [filter, setFilter] = useState({ startDate: getFilterDate(eTimeRangeDefault.THIS_MONTH) });

    const { totalOut, totalIn } = useMemo(() => {
        const sumReduce = (result, cur) => result + cur.total;
        const totalOut = data?.filter(el => el.money_movement === eMoneyMovement.OUT && el.tx_type === eTransactionType.ACTUAL)
            .reduce(sumReduce, 0);
        const totalIn = data?.filter(el => el.money_movement === eMoneyMovement.IN && el.tx_type === eTransactionType.ACTUAL)
            .reduce(sumReduce, 0);

        return { totalOut, totalIn };
    }, [data]);
    const totalRemaining = (totalIn - totalOut) || 0;

    const handleTimeRageChange = e => {
        setFilter({ startDate: getFilterDate(e.target.value) })
    }

    const getSummary = () => {
        execute({
            params: {
                'start-date': filter.startDate
            },
        });
    }

    useEffect(() => {
        getSummary();
    }, [filter]);

    return (
        <Box py={8}>
            <Box w={260}>
                <Formik
                    initialValues={{ timeRange: eTimeRangeDefault.THIS_MONTH }}
                >
                    <SelectField
                        label="Loại"
                        name="timeRange"
                        options={timeRangeSummaryOptions}
                        onChange={handleTimeRageChange}
                    />
                </Formik>
            </Box>
            <SimpleGrid columns={2} mt={8} gap={6}>
                <StatGroup>
                    <Stat>
                        <StatLabel>Chi</StatLabel>
                        <StatNumber color="orange.400">
                            {formatNumber(totalOut)}<small>đ</small>
                        </StatNumber>
                    </Stat>

                    <Stat>
                        <StatLabel>Còn lại</StatLabel>
                        <StatNumber color="green.400">
                            {formatNumber(totalRemaining)}<small>đ</small>
                        </StatNumber>
                    </Stat>
                </StatGroup>
                <Center>
                    <StatisticsByCategory data={data} />
                </Center>
            </SimpleGrid>
        </Box>
    );
};

export default Home;