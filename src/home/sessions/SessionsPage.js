import { Box, Grid, Typography } from '@mui/material'
import TopBar from '../components/TopBar';
import SearchBar from '../components/SearchBar';
import { useAuth } from 'auth/AuthContext';
import SessionCard from './components/SessionCard';
import { useFirestore } from 'data/FirestoreContext';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader';

const Sessions = () => {

    const { currentUser } = useAuth();
    const { sessions, getSessions } = useFirestore();
    const [filteredSessions, setFilteredSessions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            await getSessions();
            setIsLoading(false);
        }
        fetchData();
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

    if (isLoading) {
        return <Loader />
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }} >
            <TopBar name={`My Sessions (${filteredSessions.length}) `} />
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
