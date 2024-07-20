import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFirestore } from 'data/FirestoreContext';
import { Box, Grid, Typography } from '@mui/material';
import TopBar from '../components/TopBar';
import { formatDate } from 'utils/miscelanea';
import { MainButton } from 'components/CustomButtons';
import { PlayArrowOutlined } from '@mui/icons-material';
import StudentCard from '../students/components/StudentCard';

const SessionDetailPage = () => {
    const { sessionId } = useParams();
    const { getSession, getDocsFromReferences } = useFirestore();

    const [session, setSession] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const session = await getSession(sessionId);
            console.log(session);
            const students = await getDocsFromReferences(session.students);
            session.students = students;
            setSession(session);
        }
        fetchData();
    }, [sessionId, getDocsFromReferences, getSession]);


    if (!session) {
        return <Box>Loading...</Box>
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TopBar
                name={`${session.name} | ${formatDate(session.createdAt)}`}
                button={<MainButton startIcon={<PlayArrowOutlined />}>Watch</MainButton>}
            />
            <Grid container spacing={2} sx={{ p: 4 }}>
                <Grid item xs={12} md={12} lg={12}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>{session.name}</Typography>
                        <Typography variant="body1">{session.description}</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ p: 4 }}>
                <Grid item xs={12} md={12} lg={12}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{`Students (${session.students.length})`}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {session.students.map(student => (
                            <StudentCard key={student.id} student={student} />
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>)
};

export default SessionDetailPage;
