import { Box, Button, Grid, Typography } from '@mui/material'
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import { useAuth } from 'auth/AuthContext';
import SessionCard from './components/SessionCard';
import { useFirestore } from 'data/FirestoreContext';
import { useEffect, useState } from 'react';

const Sessions = () => {

    const { currentUser } = useAuth();
    const { rows, addDummySession } = useFirestore();
    const [filteredRows, setFilteredRows] = useState([]);

    useEffect(() => {
        setFilteredRows(rows);
    }, [rows]);

    const handleSearch = (search) => {
        const filtered = rows.filter((row) =>
            row.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredRows(filtered);
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', overflowY: 'auto' }} >
            <TopBar name={`My Sessions (${filteredRows.length}) `} />
            <Button variant="contained" color="primary" onClick={addDummySession} sx={{ m: 4 }}>Add Session</Button>
            <Grid container spacing={2} sx={{ p: 4 }}>
                <Grid item xs={12} md={6} lg={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>{`Welcome back, ${(currentUser.displayName ?? currentUser.email).split(' ')[0]}!`}</Typography>
                        <SearchBar onSearch={handleSearch} />
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ p: 4, pt: 0 }}>
                {filteredRows.map((row, index) => (
                    <Grid item xs={12} md={12} lg={12} key={index} >
                        <Box key={row.id} onClick={() => { }} >
                            <SessionCard session={row} index={index} />
                        </Box>
                    </Grid>))
                }
            </Grid>
        </Box>
    );
}

export default Sessions;
