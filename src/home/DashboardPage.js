import { Box } from '@mui/material';
import SideBarCustom from './components/SideBarCustom'
import Sessions from './sessions/Sessions';
import useDocumentTitle from 'utils/useDocumentTitle';
import { DashboardContextProvider, useDashboard } from './DashboardContext';



const DashboardPageChild = () => {

    const { page } = useDashboard();

    useDocumentTitle('Dashboard');;

    return (
        <Box sx={{ display: 'flex', backgroundColor: '#fefdf7', height: '100vh' }}>
            <SideBarCustom />
            <Box sx={{ width: '100%', overflowY: 'auto' }} >
                <Box sx={{ display: page === 'sessions' ? 'block' : 'none' }}>
                    <Sessions />
                </Box>
            </Box>
        </Box>
    );
};


const DashboardPage = () => {
    return (
        <DashboardContextProvider>
            <DashboardPageChild />
        </DashboardContextProvider>
    );
}

export default DashboardPage;
