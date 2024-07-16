import React from 'react';
import { useState } from 'react';
import { Box, Typography, Avatar, } from '@mui/material';
import { LibraryBooksOutlined, SchoolOutlined } from '@mui/icons-material';
import UserMenu from './UserMenu';
import { NavBarButton } from 'components/CustomButtons';
import { useAuth } from 'auth/AuthContext';
import { mainBlue } from 'components/CustomColors';


const SideBarCustom = ({ onChangeMenu }) => {

    const [selected, setSelected] = useState(0);
    const { currentUser } = useAuth();

    const selectMenu = (index) => {
        if (index === selected) return;
        setSelected(index);
        if (onChangeMenu) {
            onChangeMenu(index);
        }
    }

    const [anchorElUser, setAnchorElUser] = useState(null);
    const openUserMenu = Boolean(anchorElUser);

    const handleClick = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorElUser(null);
    };

    return (<>
        <Box sx={{ display: 'flex', flexDirection: 'column', borderRight: '1px solid #e9e9e9', backgroundColor: '#fff' }}>
            <Box sx={{ display: 'flex', height: '100%', alignItems: 'center', flexDirection: 'column', gap: 3, pt: 2, pb: 2, pr: 1, pl: 1 }}>
                <img alt="Logo" src="sapere.svg" width="40" />
                <NavBarButton startIcon={<LibraryBooksOutlined sx={{ width: 25, height: 25 }} />} onClick={() => selectMenu(0)} sx={{ backgroundColor: selected === 0 ? mainBlue[50] : 'transparent' }}>
                    <Typography noWrap variant="body2" fontWeight={700}>
                        Sessions
                    </Typography>
                </NavBarButton>
                <NavBarButton startIcon={<SchoolOutlined sx={{ width: 25, height: 25 }} />} onClick={() => selectMenu(0)} sx={{ backgroundColor: selected === 1 ? mainBlue[50] : 'transparent' }}>
                    <Typography noWrap variant="body2" fontWeight={700}>
                        Students
                    </Typography>
                </NavBarButton>
                <Box flexGrow={1} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, pb: 1 }}>
                    <NavBarButton
                        startIcon={<Avatar sx={{ width: 30, height: 30 }} src={currentUser.photoURL} />}
                        onClick={handleClick}
                        aria-controls={openUserMenu ? "user-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={openUserMenu ? "true" : undefined}
                        sx={{ backgroundColor: selected === 4 ? mainBlue[50] : 'transparent' }}>
                        <Typography noWrap variant="body2" fontWeight={700} sx={{ maxWidth: 60 }}>
                            {currentUser.displayName ?? currentUser.email}
                        </Typography>
                    </NavBarButton>
                </Box>
            </Box>
            <UserMenu
                anchorEl={anchorElUser}
                open={openUserMenu}
                handleClose={handleClose}
                menuId={"user-menu"}
                buttonId={"user-button"}
                userEmail={currentUser.email}
                userName={currentUser.displayName ?? currentUser.email}
                avatarSrc={currentUser.photoURL}
            />
        </Box >
    </>
    );
}

export default SideBarCustom;