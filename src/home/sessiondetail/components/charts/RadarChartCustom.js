import { Box, Typography } from '@mui/material';
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { mainBlue } from 'components/CustomColors';

const RadarChartCustom = ({ title, data, dataKey }) => {

    return (
        <Box sx={{ height: 350, backgroundColor: 'white', border: '2px solid, #e9e9e9', borderRadius: '6px', display: 'flex', flexDirection: 'column', p: 2, gap: 2 }}>
            <Typography variant="body" sx={{ fontWeight: 700 }}>{title}</Typography>
            <ResponsiveContainer height='100%' width='100%'>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={60} />
                    <Radar name="Emotion" dataKey={dataKey} stroke={mainBlue[700]} fill={mainBlue[200]} fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </Box>
    );


}

export default RadarChartCustom; 