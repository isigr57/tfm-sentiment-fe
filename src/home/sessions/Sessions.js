import { Box, Grid, Typography } from '@mui/material'
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import { useAuth } from 'auth/AuthContext';
import SessionCard from './components/SessionCard';
import { useEffect } from 'react';
import { useFirestore } from 'data/FirestoreContext';

const Sessions = () => {

    const { currentUser } = useAuth();
    const { getSessions } = useFirestore();

    const rows = [];

    useEffect(() => {
        const fetch = async () => {
            const sessions = await getSessions();
            console.log(sessions);
        };
        fetch();
    }, [getSessions]);


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', overflowY: 'auto' }} >
            <TopBar name={`My Sessions (${rows.length}) `} />
            <Grid container spacing={2} sx={{ p: 4 }}>
                <Grid item xs={12} md={6} lg={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>{`Welcome back, ${(currentUser.displayName ?? currentUser.email).split(' ')[0]}!`}</Typography>
                        <SearchBar onSearch={() => { }} />
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ p: 4, pt: 0 }}>
                {rows.map((row, index) => (
                    <Grid item xs={12} md={12} lg={12} key={index} >
                        <Box key={row.id} onClick={() => { }} >
                            <SessionCard index={index} />
                        </Box>
                    </Grid>))
                }
            </Grid>
        </Box>
    );
}

export default Sessions;
