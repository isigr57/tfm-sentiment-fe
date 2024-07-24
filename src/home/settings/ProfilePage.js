import { Avatar, Box, Typography } from '@mui/material';
import TopBar from '../components/TopBar';
import { useAuth } from 'auth/AuthContext';
import { Dialog } from '@mui/material';
import { IconButton } from '@mui/material';
import { CancelOutlined } from '@mui/icons-material';
import { ModalCancelButton } from 'components/CustomButtons';
import { MainButton, ModalConfirmButton } from 'components/CustomButtons';
import { useState } from 'react';
import TextInput from 'components/inputs/TextInput';
import { useNavigate } from 'react-router-dom';



const ProfilePage = () => {

    const { currentUser, deleteAccount, googleSignIn, emailSignIn, logOut, changeDisplayName } = useAuth();

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);

    const [password, setPassword] = useState('');
    const [newName, setNewName] = useState('');

    const navigate = useNavigate();

    const handleOpenDeleteDialog = () => {
        setOpenDeleteDialog(true);
    }

    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
    }

    const handleDeleteAction = async () => {
        // Add delete account functionality
        if (currentUser.providerData[0].providerId === 'google.com') {
            try {
                await googleSignIn();
            } catch (error) {
                console.error(error);
            }
            await deleteAccount();
        } else {
            handleOpenPasswordDialog();
        }
        handleCloseDeleteDialog();
    }

    const handleOpenPasswordDialog = () => {
        setOpenPasswordDialog(true);
    }

    const handleClosePasswordDialog = () => {
        setOpenPasswordDialog(false);
    }

    const handlePasswordAction = async () => {
        try {
            await emailSignIn({ email: currentUser.email, password });
            await deleteAccount();
        } catch (error) {
            console.error(error);
        }
        handleClosePasswordDialog();
    }

    const handleResetPassword = async () => {
        // Add reset password functionality
        await logOut();
        navigate('/recoverpassword');
    }

    const handleOpenEditDialog = () => {
        setOpenEditDialog(true);
    }

    const handleCloseEditDialog = () => {
        setOpenEditDialog(false);
    }

    const handleEditAction = async () => {
        try {
            await changeDisplayName(newName);
        } catch (error) {
            console.error(error);
        } finally {
            handleCloseEditDialog();
        }
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }} >
            <TopBar name={`Profile`} />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, p: 4 }}>
                <Box sx={{
                    display: 'flex',
                    border: '2px solid #e9e9e9',
                    backgroundColor: 'white',
                    p: 2,
                    pt: 4,
                    pb: 4,
                    gap: 4,
                    alignItems: 'center',
                    borderRadius: '6px'
                }}>
                    <Avatar sx={{ width: 100, height: 100, border: '2px solid #e9e9e9' }} src={currentUser.photoURL} />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>{`${(currentUser.displayName ?? currentUser.email)}`}</Typography>
                        <Typography variant="body1" sx={{ fontWeight: 400 }}>{currentUser.email}</Typography>
                        <Box sx={{ display: 'flex', gap: 2 }} >
                            <MainButton sx={{ mt: 2 }} onClick={handleOpenEditDialog}>Edit</MainButton>
                            <MainButton sx={{ mt: 2 }} onClick={handleResetPassword}>Reset Password</MainButton>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    border: '2px solid #e9e9e9',
                    backgroundColor: 'white',
                    p: 2,
                    gap: 4,
                    alignItems: 'center',
                    alignContent: 'center',
                    justifyContent: 'center',
                    justifyItems: 'center',
                    borderRadius: '6px'
                }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{"Delete Account?"}</Typography>
                    <Box flexGrow={1} />
                    <ModalConfirmButton sx={{ backgroundColor: 'red' }} onClick={handleOpenDeleteDialog}>Delete</ModalConfirmButton>
                </Box>
            </Box>
            <Dialog
                open={openDeleteDialog}
                onClose={handleCloseDeleteDialog}
                onClick={(e) => e.stopPropagation()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{
                    borderRadius: '6px',
                    '& .MuiBackdrop-root': {
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        backdropFilter: 'blur(2px)',
                    }
                }}
                fullWidth
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Box sx={{ p: 1, pb: 0 }}>
                        <IconButton size="small" sx={{ m: 0, color: 'black' }} onClick={handleCloseDeleteDialog}>
                            <CancelOutlined />
                        </IconButton>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 4, pt: 0, }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>Delete Account</Typography>
                        <Typography variant="body2">
                            Are you sure you want to delete <b>YOUR FULL ACCOUNT</b>? The account will be permanently removed. This action cannot be undone.
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <ModalCancelButton onClick={handleCloseDeleteDialog} >
                                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                                    Cancel
                                </Typography>
                            </ModalCancelButton>
                            <ModalConfirmButton onClick={handleDeleteAction} sx={{ backgroundColor: 'red' }} >
                                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                                    Delete
                                </Typography>
                            </ModalConfirmButton>
                        </Box>
                    </Box>
                </Box>
            </Dialog >
            <Dialog
                open={openPasswordDialog}
                onClose={handleClosePasswordDialog}
                onClick={(e) => e.stopPropagation()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{
                    borderRadius: '6px',
                    '& .MuiBackdrop-root': {
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        backdropFilter: 'blur(2px)',
                    }
                }}
                fullWidth
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Box sx={{ p: 1, pb: 0 }}>
                        <IconButton size="small" sx={{ m: 0, color: 'black' }} onClick={handleClosePasswordDialog}>
                            <CancelOutlined />
                        </IconButton>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 4, pt: 0, }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>Confirm your password</Typography>
                    <TextInput label='Password' placeholder={'Password'} name={'Password'} onChange={(e) => setPassword(e)} multiline={false} />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <ModalCancelButton onClick={handleClosePasswordDialog} >
                                <Typography variant="body2">
                                    Cancel
                                </Typography>
                            </ModalCancelButton>
                            <ModalConfirmButton onClick={handlePasswordAction} sx={{ backgroundColor: 'red' }}>
                                <Typography variant="body2" >
                                    Delete
                                </Typography>
                            </ModalConfirmButton>
                        </Box>
                    </Box>
                </Box>
            </Dialog >
            <Dialog
                open={openEditDialog}
                onClose={handleCloseEditDialog}
                onClick={(e) => e.stopPropagation()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{
                    borderRadius: '6px',
                    '& .MuiBackdrop-root': {
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        backdropFilter: 'blur(2px)',
                    }
                }}
                fullWidth
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Box sx={{ p: 1, pb: 0 }}>
                        <IconButton size="small" sx={{ m: 0, color: 'black' }} onClick={handleCloseEditDialog}>
                            <CancelOutlined />
                        </IconButton>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 4, pt: 0, }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>Edit User Name</Typography>
                    <TextInput label='Name' initialValue={currentUser.displayName ?? ''} placeholder={'User name'} name={'User name'} onChange={(e) => setNewName(e)} multiline={false} />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <ModalCancelButton onClick={handleCloseEditDialog} >
                                <Typography variant="body2">
                                    Cancel
                                </Typography>
                            </ModalCancelButton>
                            <ModalConfirmButton onClick={handleEditAction} >
                                <Typography variant="body2" >
                                    Save
                                </Typography>
                            </ModalConfirmButton>
                        </Box>
                    </Box>
                </Box>
            </Dialog >
        </Box>
    )
}

export default ProfilePage;