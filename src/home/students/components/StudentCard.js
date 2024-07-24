
import { KeyboardArrowDownOutlined, KeyboardArrowUpOutlined, LibraryBooksOutlined } from '@mui/icons-material';
import { Avatar, Box, Collapse, IconButton, Typography, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';
import { mainBlue } from 'components/CustomColors';
import { useFirestore } from 'data/FirestoreContext';
import SessionCard from 'home/sessions/components/SessionCard';
import { useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { CircularProgress } from '@mui/material';



const StudentCard = ({ student }) => {

    const { getSession } = useFirestore();
    const [open, setOpen] = useState(false);
    const [sessions, setSessions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async (event) => {
        setIsLoading(true);
        event.stopPropagation();
        setOpen(!open);
        if (!open) {
            const ret = [];
            for (let i = 0; i < student.sessions.length; i++) {
                const value = student.sessions[i];
                const session = await getSession(value);
                if (session) {
                    ret.push(session);
                }
            }
            ret.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
            setSessions(ret);
        }
        setIsLoading(false);
    }

    return (<>
        <Box sx={{
            display: 'flex',
            border: '2px solid #e9e9e9',
            borderColor: open ? mainBlue[500] : '#e9e9e9',
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
        }} onClick={handleClick}>
            <Avatar variant='square' sx={{ borderRadius: '6px' }} src={student.imagePath ?? ''} alt={student.name} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="body" sx={{ fontWeight: 700 }}>{student.name}</Typography>
                <Typography variant="caption" sx={{ fontWeight: 500 }}>{student.email ? student.email : 'No email'}</Typography>
            </Box>
            <Box flexGrow={1} />
            <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>{student.sessions.length ?? 0}</Typography>
                <LibraryBooksOutlined />
                <IconButton onClick={async (e) => await handleClick(e)} >
                    {!open ? <KeyboardArrowDownOutlined sx={{ color: grey[500] }} /> : <KeyboardArrowUpOutlined sx={{ color: grey[500] }} />}
                </IconButton>
            </Box>

        </Box>
        <TransitionGroup>
            {open ?
                <Collapse>
                    <Box sx={{
                        gap: 2,
                        p: 4,
                        zIndex: 1,
                        border: '2px solid #e9e9e9',
                        borderTop: 'none',
                        borderRadius: '0px 0px 6px 6px',
                        backgroundColor: 'white'
                    }}>
                        <Box sx={{ display: 'flex', gap: 4 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Avatar variant='square' sx={{ borderRadius: '6px', width: 150, height: 200 }} src={student.imagePath ?? ''} alt={student.name} />
                                <Typography variant="body2" sx={{ fontWeight: 500 }}>Student since {new Date(student.createdAt.seconds * 1000).toLocaleDateString()}</Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, pt: 2 }}>Recognition Images</Typography>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    {student.recognitionImages.map((image, index) => (
                                        <Avatar key={index} variant='square' sx={{ borderRadius: '6px' }} src={image} alt={student.name} />
                                    ))}
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} flexGrow={1}>
                                <Typography variant="h6" sx={{ fontWeight: 700, pb: 1 }}>Sessions ({sessions.length})</Typography>
                                <Grid container spacing={2} sx={{ maxHeight: 290, overflowY: 'auto' }}>
                                    {isLoading
                                        ?
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 290 }}>
                                            <CircularProgress color="inherit" />
                                        </Box>
                                        :
                                        sessions.map((session, index) => (
                                            <Grid item xs={12} md={12} lg={12} key={index} >
                                                <SessionCard session={session} hideOptions />
                                            </Grid>))
                                    }
                                </Grid>
                            </Box>
                        </Box>

                    </Box>
                </Collapse>
                : null}
        </TransitionGroup >
    </>
    );
}
export default StudentCard;