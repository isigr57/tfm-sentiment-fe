import { Box, Typography } from '@mui/material';
import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { mainBlue } from 'components/CustomColors';
import { green, lightBlue, orange, purple, red, yellow } from '@mui/material/colors';

const lineColors = [
    { stroke: mainBlue[700], fill: mainBlue[200] },
    { stroke: green[700], fill: green[200] },
    { stroke: red[700], fill: red[200] },
    { stroke: yellow[700], fill: yellow[200] },
    { stroke: orange[700], fill: orange[200] },
    { stroke: purple[700], fill: purple[200] },
    { stroke: lightBlue[700], fill: lightBlue[200] },
];

const MultiLineChartCustom = ({ title, data, datakeys }) => {

    return (
        <Box sx={{ height: 300, backgroundColor: 'white', border: '2px solid, #e9e9e9', borderRadius: '6px', display: 'flex', flexDirection: 'column', p: 2, gap: 2 }}>
            <Typography variant="body" sx={{ fontWeight: 700 }}>{title}</Typography>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    syncId={'syncId'}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} allowDataOverflow/>
                    <Tooltip />
                    {
                        datakeys.map((key, index) => (
                            <Area type="monotone" stackId={'1'} dataKey={key} stroke={lineColors[index].stroke} fill={lineColors[index].fill} />
                        ))
                    }
                </AreaChart>
            </ResponsiveContainer>
        </Box>
    );


}

export default MultiLineChartCustom;