import React from 'react';
import { Divider, Menu } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { PopMenuButton } from 'components/CustomButtons';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
import { PersonOutlineOutlined, SettingsOutlined } from '@mui/icons-material';


const UserMenu = ({ anchorEl, menuId, buttonId, open, handleClose, userName, userEmail }) => {

    const navigate = useNavigate();

    const { logOut } = useAuth();


    const handleLogout = async () => {
        // Add logout functionality
        try {
            await logOut();
            navigate('/login');
        } catch (error) {
            console.error("Error logging out", error);
        }

    }

    return (
        <Menu
            id={menuId}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            aria-labelledby={buttonId}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            sx={{
                '& .MuiPaper-root': {
                    boxShadow: 'none',
                    border: '1px solid #e9e9e9',
                }
            }}
        >

            <Box sx={{ display: 'flex', p: 2, pt: 0, gap: 2 }}>
                <Box sx={{ textAlign: 'left', minWidth: '200px' }}>
                    <Typography sx={{ p: 0, m: 0, fontWeight: 700 }} variant="body1">{userName}</Typography>
                    <Typography sx={{ p: 0, m: 0, fontWeight: 400, color: grey[500] }} variant="caption">{userEmail}</Typography>
                </Box>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', m: 1 }}>
                <PopMenuButton startIcon={<PersonOutlineOutlined sx={{ width: 25, height: 25 }} />}>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                        Profile
                    </Typography>
                    <Box flexGrow={1} />
                </PopMenuButton>
                <PopMenuButton startIcon={< SettingsOutlined sx={{ width: 25, height: 25 }} />} >
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                        Settings
                    </Typography>
                    <Box flexGrow={1} />
                </PopMenuButton>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', m: 1, mb: 0 }}>
                <PopMenuButton startIcon={<LogoutRoundedIcon sx={{ width: 25, height: 25 }} />} onClick={handleLogout}>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                        Sign out
                    </Typography>
                    <Box flexGrow={1} />
                </PopMenuButton>
            </Box>
        </Menu >
    );
}

export default UserMenu;