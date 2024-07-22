import { GroupOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';

const StudentsCountCard = ({ value }) => {

    return (
        <Box sx={{ height: 175, backgroundColor: 'white', border: '2px solid, #e9e9e9', borderRadius: '6px', display: 'flex', flexDirection: 'column', p: 2, gap: 2 }}>
            <Typography variant="body" sx={{ fontWeight: 700 }}>Students Count</Typography>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', mb: 3 }}>
                <GroupOutlined sx={{ fontSize: 40 }} />
                <Typography variant="h3" sx={{ fontWeight: 700 }}>{value}</Typography>
            </Box>
        </Box>
    );


}

export default StudentsCountCard; 