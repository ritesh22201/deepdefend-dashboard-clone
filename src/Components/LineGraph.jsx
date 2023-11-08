
// import React from 'react';
// import ApexCharts from 'react-apexcharts';

// const LineGraph = () => {
//     const options = {
//         chart: {
//             type: 'line',
//             responsive: [
//                 {
//                     breakpoint: undefined,
//                     options: {
//                         height: '250px',
//                         width: '100%',
//                     },
//                 },
//             ],
//         },
//         series: [
//             {
//                 name: 'Series 1',
//                 data: [20, 60, 40, 50, 30, 70, 30],
//             },
//         ],
//         xaxis: {
//             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//         },
//     };

//     return (
//         <div>
//             <ApexCharts options={options} series={options.series} type="line" />
//         </div>
//     );
// };

// export default LineGraph;

import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {faker} from '@faker-js/faker';
import { Line } from 'react-chartjs-2';

export function LineGraph() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                outerWidth : '100%'
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 100,
                    stepSize: 50,
                },
            }],
        },
    };

    const labels = ['14 Mar', '20 Mar', '26 Mar', '01 Apr', '07 Apr'];

    const data = {
        labels,
        datasets: [
            {
                data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                borderColor: 'rgb(99, 190, 255)',
                backgroundColor: 'rgba(20, 114, 140, 0.5)',
            },
            {
                data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                borderColor: '#fb8022',
                backgroundColor: '#fb8022',
            }
        ],
    };

    return <Line width={'600%'} options={options} data={data} />;
}

