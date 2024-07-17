import { Box, Typography } from '@mui/material';


const TopBar = ({ name, button }) => {
    return (<Box sx={{
        display: 'flex',
        backgroundColor: '#fff',
        borderBottom: '1px solid #e9e9e9',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        right: 0,
        zIndex: 1100,
        pl: 4,
        pr: 4,
        pt: 1.5,
        pb: 1.5,
    }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {name}
        </Typography>
        <Box flexGrow={1} />
        {button}

    </Box>);
}

export default TopBar;