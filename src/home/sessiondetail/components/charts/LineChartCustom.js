import { Box, Typography } from '@mui/material';
import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { mainBlue } from 'components/CustomColors';

const LineChartCustom = ({ title, lineType = 'monotone', data, dataKey }) => {

    return (
        <Box sx={{ height: 350, backgroundColor: 'white', border: '2px solid, #e9e9e9', borderRadius: '6px', display: 'flex', flexDirection: 'column', p: 2, gap: 2 }}>
            <Typography variant="body" sx={{ fontWeight: 700 }}>{title}</Typography>
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
                    <YAxis domain={['auto', 'auto']} />
                    <Tooltip />
                    <Area type={lineType} dataKey={dataKey} stroke={mainBlue[700]} fill={mainBlue[200]} />
                </AreaChart>
            </ResponsiveContainer>
        </Box>
    );


}

export default LineChartCustom;