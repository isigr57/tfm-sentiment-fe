
import { GroupOutlined, MoreVertOutlined } from '@mui/icons-material';
import { Avatar, Box, IconButton, Typography, Dialog, Menu } from '@mui/material';
import { grey } from '@mui/material/colors';
import { mainBlue } from 'components/CustomColors';
import { formatDate } from 'utils/miscelanea';
import { CancelOutlined } from '@mui/icons-material';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { ModalCancelButton, ModalConfirmButton, PopMenuButton } from 'components/CustomButtons';
import { useState } from 'react';
import { useFirestore } from 'data/FirestoreContext';
import TextInput from 'components/inputs/TextInput';
import Loader from 'components/Loader';



const SessionCard = ({ session, hideOptions = false }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [newName, setNewName] = useState(session.name);
    const [isLoading, setIsLoading] = useState(false);

    const { deleteSession, updateSession } = useFirestore();

    const handleClick = (event) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    }

    const handleClose = (event) => {
        event.stopPropagation();
        setAnchorEl(null);
    }

    const handleDeleteAction = async (event) => {
        setIsLoading(true);
        event.stopPropagation();
        setAnchorEl(null);
        setOpenDeleteDialog(false);
        await deleteSession(session.id);
        setIsLoading(false);
    }

    const handleCloseDeleteDialog = (event) => {
        event.stopPropagation();
        setAnchorEl(null);
        setOpenDeleteDialog(false);
    }

    const handleOpenDeleteDialog = (event) => {
        event.stopPropagation();
        setOpenDeleteDialog(true);
    }

    const handleEditAction = async (event) => {
        setIsLoading(true);
        event.stopPropagation();
        setAnchorEl(null);
        setOpenEditDialog(false);
        await updateSession({ ...session, name: newName });
        setIsLoading(false);
    }

    const handleCloseEditDialog = (event) => {
        event.stopPropagation();
        setAnchorEl(null);
        setOpenEditDialog(false);
    }

    const handleOpenEditDialog = (event) => {
        event.stopPropagation();
        setOpenEditDialog(true);
    }

    const navigateToSession = (id) => {
        if (window.location.pathname.includes(id)) {
            return;
        }
        window.location.href = `/session/${id}`;
    }

    return (<>
        {isLoading && <Loader />}
        <Box sx={{
            display: 'flex',
            border: '2px solid #e9e9e9',
            backgroundColor: 'white',
            p: 2,
            pr: 0.5,
            gap: 2,
            alignItems: 'center',
            borderRadius: '6px',
            '&:hover': {
                cursor: 'pointer',
                borderColor: mainBlue[500],
                backgroundColor: mainBlue[50],
            }
        }} onClick={() => navigateToSession(session.id)}>
            <Avatar variant='square' sx={{ borderRadius: '6px' }} src={session.imagePath ?? ''} alt={session.name} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="body" sx={{ fontWeight: 700 }}>{session.name}</Typography>
                <Typography variant="caption" sx={{ fontWeight: 500 }}>{session.createdAt ? formatDate(session.createdAt) : 'No date'}</Typography>
            </Box>
            <Box flexGrow={1} />
            <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>{session.students.length ?? 0}</Typography>
                <GroupOutlined />
                {hideOptions ? <Box sx={{ pr: 1 }} /> : <IconButton onClick={handleClick} >
                    <MoreVertOutlined sx={{ color: grey[500] }} />
                </IconButton>}
            </Box>

        </Box>
        <Menu
            id="card-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            aria-labelledby='card-button'
            sx={{
                '& .MuiPaper-root': {
                    boxShadow: 'none',
                    border: '1px solid #e9e9e9',
                }
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', ml: 1, mr: 1 }}>
                <PopMenuButton onClick={handleOpenEditDialog} startIcon={<EditOutlined sx={{ width: 25, height: 25 }} />}>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                        Rename
                    </Typography>
                    <Box flexGrow={1} />
                </PopMenuButton>
                <PopMenuButton onClick={handleOpenDeleteDialog} startIcon={< DeleteOutline sx={{ width: 25, height: 25 }} />}>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                        Delete
                    </Typography>
                    <Box flexGrow={1} />
                </PopMenuButton>
            </Box>
        </Menu>
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
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>Delete session</Typography>
                    <Typography variant="body2">
                        Are you sure you want to delete <b>'{session.name}'</b>? The session will be permanently removed. This action cannot be undone.
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
                <Typography variant="h6" sx={{ fontWeight: 700 }}>Edit Session</Typography>
                <TextInput label='Name' initialValue={session.name} placeholder={'Session name'} name={'Session name'} onChange={(e) => setNewName(e)} multiline={false} />
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
    </>
    );
}
export default SessionCard;