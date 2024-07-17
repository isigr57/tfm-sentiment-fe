import { Box, Button, Grid, Typography } from '@mui/material'
import TopBar from '../components/TopBar';
import SearchBar from '../components/SearchBar';
import { useAuth } from 'auth/AuthContext';
import SessionCard from './components/SessionCard';
import { useFirestore } from 'data/FirestoreContext';
import { useEffect, useState } from 'react';

const Sessions = () => {

    const { currentUser } = useAuth();
    const { sessions, getSessions, addDummySession } = useFirestore();
    const [filteredSessions, setFilteredSessions] = useState([]);

    useEffect(() => {
        getSessions();
    }, [getSessions]);

    useEffect(() => {
        setFilteredSessions(sessions);
    }, [sessions]);

    const handleSearch = (search) => {
        const filtered = sessions.filter((session) =>
            session.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredSessions(filtered);
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }} >
            <TopBar name={`My Sessions (${filteredSessions.length}) `} />
            <Button variant="contained" color="primary" onClick={addDummySession} sx={{ m: 4 }}>Add Session</Button>
            <Grid container spacing={2} sx={{ p: 4 }}>
                <Grid item xs={12} md={6} lg={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>{`Welcome back, ${(currentUser.displayName ?? currentUser.email).split(' ')[0]}!`}</Typography>
                        <SearchBar onSearch={handleSearch} placeholder={"Search my flows"} />
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ p: 4, pt: 0 }}>
                {filteredSessions.map((session, index) => (
                    <Grid item xs={12} md={12} lg={12} key={index} >
                        <SessionCard session={session} />
                    </Grid>))
                }
            </Grid>
        </Box>
    );
}

export default Sessions;
