import { Box, Typography } from '@mui/material';
import React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { mainBlue } from 'components/CustomColors';



const GaugeIndicatorCard = ({value}) => {

    return (
        <Box sx={{ height: 150, backgroundColor: 'white', border: '2px solid, #e9e9e9', borderRadius: '6px', display: 'flex', flexDirection: 'column', p: 2, gap: 2 }}>
            <Typography variant="body" sx={{ fontWeight: 700 }}>Overall Attention</Typography>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', mb: 3 }}>
                <Gauge
                    sx={{
                        [`& .${gaugeClasses.valueText}`]: {
                            fontSize: 30,
                            transform: 'translate(0px, -12px)',
                            fontWeight: 700,
                        },
                        [`& .${gaugeClasses.valueArc}`]: {
                            fill: mainBlue[500],
                        },
                    }}
                    text={
                        ({ value }) => `${value}%`
                    }
                    value={value} startAngle={-90} endAngle={90} />
            </Box>
        </Box>
    );


}

export default GaugeIndicatorCard; 