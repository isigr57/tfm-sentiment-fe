import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import FlowCard from './components/FlowCard';
import { defaultFlows } from 'utils/dummyData';
import { useAuth } from 'auth/AuthContext';

const Sessions = () => {
    const navigate = useNavigate();
    const [rows, setRows] = useState([]);

    const { currentUser } = useAuth();

    useEffect(() => {
        setRows(Array.from(Object.values(defaultFlows)));
    }, []);

    const handleSearch = (searchTerm) => {
        console.log('Searching for:', searchTerm);
        const filteredRows = rows.filter((row) => {
            return row.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setRows(filteredRows);
    };

    const handleClick = (index) => {
        console.log('Clicked on flow with index:', index);
        navigate(`/${index}`);
    };

    const handleDelete = (index) => {
        console.log('Delete flow with index:', index);
        const updatedRows = rows.filter((row) => row.id !== index);
        setRows(updatedRows);
        localStorage.setItem('flows', JSON.stringify(updatedRows));
    }

    const handleEdit = (index, newName, newDescription) => {
        console.log('Edit flow with index:', index);
        const updatedRows = rows.map((row) => {
            if (row.id === index) {
                row.name = newName;
                row.description = newDescription;
            }
            return row;
        });
        setRows(updatedRows);
        localStorage.setItem('flows', JSON.stringify(updatedRows));
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', overflowY: 'auto' }} >
            <TopBar name={`My Sessions (${rows.length}) `} />
            <Grid container spacing={2} sx={{ p: 4 }}>
                <Grid item xs={12} md={6} lg={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>{`Welcome back, ${(currentUser.displayName ?? currentUser.email).split(' ')[0]}!`}</Typography>
                        <SearchBar onSearch={handleSearch} />
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ p: 4, pt: 0 }}>
                {rows.map((row, index) => (
                    <Grid item xs={12} md={6} lg={4} key={index} >
                        <Box key={row.id} onClick={() => handleClick(row.id)} >
                            <FlowCard flow={row} index={index} handleDelete={handleDelete} handleEdit={handleEdit} />
                        </Box>
                    </Grid>))
                }
            </Grid>
        </Box>
    );
}

export default Sessions;
