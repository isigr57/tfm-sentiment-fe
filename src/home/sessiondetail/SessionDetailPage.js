import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFirestore } from 'data/FirestoreContext';
import { Box, Grid, Typography } from '@mui/material';
import TopBar from '../components/TopBar';
import { formatDate, capitalize } from 'utils/miscelanea';
import { MainButton } from 'components/CustomButtons';
import { PlayArrowOutlined } from '@mui/icons-material';
import RadarChartCustom from './components/charts/RadarChartCustom';
import LineChartCustom from './components/charts/LineChartCustom';
import MainEmotionCard from './components/charts/MainEmotionCard';
import Loader from 'components/Loader';
import GaugeIndicatorCard from './components/charts/GaugeIndicatorCard';
import StudentsCountCard from './components/charts/StudentsCountCard';
import StudentDetailCard from './components/studentDetail/StudentDetailCard';

const SessionDetailPage = () => {
    const { sessionId } = useParams();
    const { getSession, getStudent } = useFirestore();

    const [session, setSession] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const session = await getSession(sessionId);
            for (let i = 0; i < session.students.length; i++) {
                session.students[i] = await getStudent(session.students[i]);
            }
            setSession(session);
        }
        fetchData();
    }, [sessionId, getStudent, getSession]);


    if (!session) {
        return <Loader />
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TopBar
                name={`${session.name} | ${formatDate(session.createdAt)}`}
                button={<MainButton startIcon={<PlayArrowOutlined />} onClick={() => window.location.href = session.videoUrl}>Watch</MainButton>}
            />
            <Grid container spacing={2} sx={{ p: 4 }}>
                <Grid item xs={12} md={4} lg={4}>
                    <MainEmotionCard emotion={capitalize(session.sessionData.mainEmotion)} />
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <GaugeIndicatorCard value={session.sessionData.overallAttention} />
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <StudentsCountCard value={session.students.length} />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <RadarChartCustom title={"Emotion Radar"} data={session.sessionData.emotionRadar} dataKey={"A"} />
                </Grid>
                <Grid item xs={12} md={6} lg={8}>
                    <LineChartCustom title={"Attention over time"} data={session.sessionData.attentionOverTime} dataKey={'attention'} />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Typography variant="h6" sx={{ fontWeight: 700, p: 1 }}>{`Students Statics (${session.students.length})`}</Typography>
                </Grid>
                {session.students.map((student, index) => (
                    <Grid item key={index} xs={12} md={12} lg={12}>
                        <StudentDetailCard student={student} data={session.studentsData[student.id]} />
                    </Grid>
                ))}
            </Grid>
        </Box>)
};

export default SessionDetailPage;
