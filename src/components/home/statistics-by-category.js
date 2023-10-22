import React, { useMemo } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie } from 'react-chartjs-2';
import { eMoneyMovement, eTransactionType } from '@/constants';
import { Box } from '@chakra-ui/react';
import { formatNumber } from '@/utils';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const colors = ["#ea5545", "#f46a9b", "#ef9b20", "#edbf33", "#ede15b", "#bdcf32", "#87bc45", "#27aeef", "#b33dc6", "#fd7f6f", "#7eb0d5", "#b2e061", "#bd7ebe", "#ffb55a", "#ffee65", "#beb9db", "#fdcce5", "#8bd3c7"]


const StatisticsByCategory = ({ data }) => {
    const dataOutActual = useMemo(() => {
        return data?.filter(el => el.money_movement === eMoneyMovement.OUT && el.tx_type === eTransactionType.ACTUAL) || [];
    }, [data]);

    const options = {
        responsive: true,
        plugins: {
            htmlLegend: {
                containerID: 'legend-container',
            },
            legend: {
                display: true,
                position: 'bottom',
                align: 'start',
            },
            datalabels: {
                color: "white",
                formatter: formatNumber,
            }
        },
    }

    const dataChart = useMemo(() => {
        let labels = dataOutActual.map(el => el.categoryName);
        const datasets = [
            {
                label: 'Chi',
                data: dataOutActual.map(el => el.total),
                backgroundColor: dataOutActual.map((_, index) => colors[index]),
            }
        ]
        return { labels, datasets }
    }, [dataOutActual]);

    console.log(dataChart);

    return (
        <Pie data={dataChart} options={options} />
    );
};

export default StatisticsByCategory;