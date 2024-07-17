
import { KeyboardArrowDownOutlined, KeyboardArrowUpOutlined, LibraryBooksOutlined } from '@mui/icons-material';
import { Avatar, Box, Collapse, IconButton, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { mainBlue } from 'components/CustomColors';
import { useState } from 'react';
import { TransitionGroup } from 'react-transition-group';


const StudentCard = ({ student }) => {

    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        event.stopPropagation();
        setOpen(!open);
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
                <Typography variant="body2" sx={{ fontWeight: 700 }}>{student.sessionsCount ?? 0}</Typography>
                <LibraryBooksOutlined />
                <IconButton onClick={handleClick} >
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
                                <Typography variant="caption" sx={{ fontWeight: 500 }}>Student since {student.createdAt.toLocaleDateString()}</Typography>
                                <Typography variant="body2" sx={{ fontWeight: 700, pt: 2 }}>Recognition Images</Typography>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    {student.recognitionImages.map((image, index) => (
                                        <Avatar key={index} variant='square' sx={{ borderRadius: '6px' }} src={image} alt={student.name} />
                                    ))}
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Typography variant="body2" sx={{ fontWeight: 700 }}>Sessions ({student.sessionsCount})</Typography>
                                {student.sessions.map((session, index) => (
                                    <Box key={index} sx={{ display: 'flex', gap: 2 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 700 }}>{session.createdAt.toLocaleDateString()}</Typography>
                                        <Typography variant="body2" sx={{ fontWeight: 700 }}>{session.createdAt.toLocaleTimeString()}</Typography>
                                    </Box>
                                ))}
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