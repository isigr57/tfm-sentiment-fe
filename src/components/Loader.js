import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

const Loader = () => {
    return (<Backdrop
        sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(2px)', zIndex: (theme) => theme.zIndex.drawer + 1
        }}
        open={true}
    >
        <CircularProgress color="inherit" />
    </Backdrop>);   

}

export default Loader;
