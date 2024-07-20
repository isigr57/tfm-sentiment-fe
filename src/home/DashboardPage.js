import { Box } from '@mui/material';
import SideBarCustom from './components/SideBarCustom'
import Sessions from './sessions/SessionsPage';
import useDocumentTitle from 'utils/useDocumentTitle';
import { Navigate, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import StudentsPage from './students/StudentsPage';
import ProfilePage from './settings/ProfilePage';
import SessionDetailPage from './sessiondetail/SessionDetailPage';



const DashboardPage = () => {

    const page = window.location.pathname.split('/')[1];

    useDocumentTitle('Dashboard' + (page.length > 0 ? ' | ' + page.charAt(0).toUpperCase() + page.slice(1) : ''));

    return (
        <Box sx={{ display: 'flex', backgroundColor: '#fefdf7', height: '100vh' }}>
            <SideBarCustom />
            <Box sx={{ width: '100%', overflowY: 'auto' }} >
                <Routes>
                    <Route path="/" element={<Sessions />} />
                    <Route path="/students" element={<StudentsPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/session/:sessionId" element={<SessionDetailPage />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
            </Box>
        </Box>
    );
};

export default DashboardPage;
