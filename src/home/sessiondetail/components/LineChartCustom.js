import { Box, Typography } from '@mui/material';
import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { mainBlue } from 'components/CustomColors';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Page H',
        uv: 3100,
        pv: 3000,
        amt: 2300,
    },
    {
        name: 'Page I',
        uv: 3200,
        pv: 4200,
        amt: 2600,
    },
    {
        name: 'Page J',
        uv: 2800,
        pv: 3100,
        amt: 2200,
    },
    {
        name: 'Page K',
        uv: 3600,
        pv: 3700,
        amt: 2400,
    },
    {
        name: 'Page L',
        uv: 3400,
        pv: 2900,
        amt: 2500,
    },
    {
        name: 'Page M',
        uv: 3300,
        pv: 3100,
        amt: 2300,
    },
    {
        name: 'Page N',
        uv: 3500,
        pv: 3400,
        amt: 2600,
    },
    {
        name: 'Page O',
        uv: 2900,
        pv: 3800,
        amt: 2100,
    },
    {
        name: 'Page P',
        uv: 3000,
        pv: 3500,
        amt: 2400,
    },
    {
        name: 'Page Q',
        uv: 3100,
        pv: 3900,
        amt: 2500,
    },
    {
        name: 'Page R',
        uv: 2700,
        pv: 3600,
        amt: 2200,
    },
    {
        name: 'Page S',
        uv: 2600,
        pv: 3400,
        amt: 2100,
    },
    {
        name: 'Page T',
        uv: 3200,
        pv: 3300,
        amt: 2400,
    },
];

const LineChartCustom = () => {

    return (
        <Box sx={{ height: 350, backgroundColor: 'white', border: '2px solid, #e9e9e9', borderRadius: '6px', display: 'flex', flexDirection: 'column', p: 2, gap: 2 }}>
            <Typography variant="body" sx={{ fontWeight: 700 }}>Attention over time</Typography>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke={mainBlue[700]} fill={mainBlue[400]} />
                </AreaChart>
            </ResponsiveContainer>
        </Box>
    );


}

export default LineChartCustom;