import { Box } from '@mui/material';
import SideBarCustom from './components/SideBarCustom'
import Sessions from './sessions/Sessions';
import useDocumentTitle from 'utils/useDocumentTitle';



const DashboardPage = () => {

    useDocumentTitle('Dashboard');;

    return (
        <Box sx={{ display: 'flex', backgroundColor: '#fefdf7', height: '100vh' }}>
            <SideBarCustom />
            <Sessions />
        </Box>
    );
};

export default DashboardPage;
