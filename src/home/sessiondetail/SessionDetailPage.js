import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFirestore } from 'data/FirestoreContext';
import { Box, Grid, Typography } from '@mui/material';
import TopBar from '../components/TopBar';
import { formatDate } from 'utils/miscelanea';
import { MainButton } from 'components/CustomButtons';
import { PlayArrowOutlined } from '@mui/icons-material';
import StudentCard from '../students/components/StudentCard';
import RadarChartCustom from './components/RadarChartCustom';
import LineChartCustom from './components/LineChartCustom';
import MainEmotionCard from './components/MainEmotionCard';
import Loader from 'components/Loader';

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
        return <Loader />
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TopBar
                name={`${session.name} | ${formatDate(session.createdAt)}`}
                button={<MainButton startIcon={<PlayArrowOutlined />}>Watch</MainButton>}
            />
            <Grid container spacing={2} sx={{ p: 4 }}>
                <Grid item xs={12} md={12} lg={12}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>Overview</Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <MainEmotionCard emotion={"Neutral"} />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <MainEmotionCard emotion={"Sad"} />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <MainEmotionCard emotion={"Angry"} />
                </Grid>

                <Grid item xs={12} md={4} lg={4}>
                    <RadarChartCustom />
                </Grid>
                <Grid item xs={12} md={8} lg={8}>
                    <LineChartCustom />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Typography variant="h6" sx={{ fontWeight: 700, p: 1 }}>{`Students Statics (${session.students.length})`}</Typography>
                </Grid>
                {session.students.map((student, index) => (
                    <Grid item key={index} xs={12} md={12} lg={12}>
                        <StudentCard student={student} />
                    </Grid>
                ))}
            </Grid>
        </Box>)
};

export default SessionDetailPage;
