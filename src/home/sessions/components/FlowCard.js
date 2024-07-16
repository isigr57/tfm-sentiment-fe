import React, { useState } from "react";
import { Avatar, Box, Dialog, IconButton, Menu } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Typography } from "@mui/material";
import { MenuRounded, PeopleAltOutlined, SaveRounded, WarningAmberRounded } from "@mui/icons-material";
import { GreyButton } from "components/CustomButtons";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import TextInput from "components/inputs/TextInput";

const FlowCard = ({ flow, handleEdit, handleDelete }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);

    const [flowName, setFlowName] = useState(flow.name);
    const [description, setDescription] = useState(flow.description);

    const handleClick = (event) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    }

    const handleClose = (event) => {
        event.stopPropagation();
        setAnchorEl(null);
    }

    const handleDeleteMenu = (event) => {
        event.stopPropagation();
        setAnchorEl(null);
        handleCloseDeleteDialog(event);
        if (handleDelete) {
            handleDelete(flow.id);
        }
    }

    const handleEditMenu = (event) => {
        event.stopPropagation();
        setAnchorEl(null);
        handleCloseEditDialog(event);
        if (handleEdit) {
            handleEdit(flow.id, flowName, description);
        }
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

    const handleOpenEditDialog = (event) => {
        event.stopPropagation();
        setOpenEditDialog(true);
    }

    const handleCloseEditDialog = (event) => {
        event.stopPropagation();
        setOpenEditDialog(false);
    }

    return (
        <Box sx={{ display: 'flex', p: 2, gap: 3, flexDirection: 'column', justifyContent: 'space-between', border: '1px solid #e9e9e9', borderRadius: '6px', backgroundColor: '#f9f9f9', cursor: 'pointer', '&:hover': { backgroundColor: '#e4eff6' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', gap: 1, width: '90%' }}>
                    <Typography variant="body1" noWrap sx={{ fontWeight: 700 }}>{flow.name}</Typography>
                    {flow.isPublic ? <PeopleAltOutlined /> : null}
                </Box>
                <Box flexGrow={1} />
                <IconButton
                    id="card-button"
                    sx={{ p: 0.5 }}
                    onClick={handleClick}
                    aria-controls={open ? "card-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                >
                    <MenuRounded sx={{ color: grey[600] }} />
                </IconButton>
            </Box>
            <Typography variant="body2" sx={{
                color: grey[500], overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                fontWeight: 400
            }}>{flow.description}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
                {flow.images.map((image, index) => (
                    <Box sx={{ display: 'flex', borderRadius: '50%', backgroundColor: 'white', height: 40, width: 40, border: '1px solid #e9e9e9', justifyContent: 'center', alignItems: 'center' }}>
                        <Avatar src={image} key={index} sx={{ height: 35, width: 35 }} />
                    </Box>
                ))}
                <Box flexGrow={1} />
                <Typography variant="body2" sx={{ color: grey[600] }}>{flow.lastRun}</Typography>
            </Box>
            <Menu
                id="card-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                aria-labelledby='card-button'
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', ml: 1, mr: 1 }}>
                    <GreyButton onClick={handleOpenEditDialog} startIcon={<EditRoundedIcon sx={{ width: 20, height: 20, color: grey[600] }} />}>
                        <Typography variant="body2">
                            Edit
                        </Typography>
                        <Box flexGrow={1} />
                    </GreyButton>
                    <GreyButton onClick={handleOpenDeleteDialog} startIcon={< DeleteRoundedIcon sx={{ width: 20, height: 20, color: '#f44336' }} />}>
                        <Typography variant="body2" sx={{ color: '#f44336' }}>
                            Delete
                        </Typography>
                        <Box flexGrow={1} />
                    </GreyButton>
                </Box>
            </Menu>
            <Dialog
                open={openDeleteDialog}
                onClose={handleCloseDeleteDialog}
                onClick={(e) => e.stopPropagation()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ borderRadius: '6px' }}
                fullWidth
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', m: 2, gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%', backgroundColor: '#f4433633', }}>
                            <WarningAmberRounded sx={{ color: '#f44336', mb: 0.5 }} />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>Delete flow</Typography>
                    </Box>

                    <Typography variant="body2" sx={{ color: grey[600] }}>
                        Are you sure you want to delete '{flow.name}'? The flow will be permanently removed. This action cannot be undone.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <GreyButton onClick={handleCloseDeleteDialog} >
                            <Typography variant="body2">
                                Cancel
                            </Typography>
                        </GreyButton>
                        <GreyButton onClick={handleDeleteMenu} startIcon={<DeleteRoundedIcon sx={{ width: 20, height: 20, color: '#f44336' }} />} >
                            <Typography variant="body2" sx={{ color: '#f44336' }}>
                                Delete
                            </Typography>
                        </GreyButton>
                    </Box>
                </Box>
            </Dialog>
            <Dialog
                open={openEditDialog}
                onClose={handleCloseEditDialog}
                onClick={(e) => e.stopPropagation()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ borderRadius: '6px' }}
                fullWidth
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', m: 2, gap: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>Edit flow</Typography>
                    <Typography variant="body2" sx={{ color: grey[600] }}>
                        Edit the flow '{flow.name}'. You can change the name, and description.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', p: 2, justifyContent: 'center', gap: 2 }}>
                    <TextInput label='Name' initialValue={flow.name} placeholder={'Flow name'} name={'Flow name'} onChange={(e) => setFlowName(e)} multiline={false} />
                    <TextInput label='Description' initialValue={flow.description} placeholder={'Flow description'} name={'Flow description'} onChange={(e) => setDescription(e)} multiline={true} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <GreyButton onClick={handleCloseEditDialog} >
                            <Typography variant="body2" sx={{ color: '#f44336' }}>
                                Cancel
                            </Typography>
                        </GreyButton>
                        <GreyButton onClick={handleEditMenu} startIcon={<SaveRounded sx={{ width: 20, height: 20, }} />} >
                            <Typography variant="body2" >
                                Save
                            </Typography>
                        </GreyButton>
                    </Box>
                </Box>
            </Dialog>

        </Box >
    );
}

export default FlowCard;