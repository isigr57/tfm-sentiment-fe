import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { useAuth } from '../AuthContext';
import { grey } from '@mui/material/colors';
import Link from '@mui/material/Link';
import { useSnackbar } from 'notistack';
import { FirebaseError } from 'firebase/app';
import { MainButton } from '../../components/CustomButtons';
import TextInput from 'components/inputs/TextInput';
import { useNavigate } from 'react-router-dom';
import useDocumentTitle from 'utils/useDocumentTitle';

const RecoverPasswordPage = () => {
    const [email, setEmail] = useState('');
    const { recoverPassword } = useAuth();
    const { enqueueSnackbar } = useSnackbar();

    const navigate = useNavigate();

    const handleRecoverPassword = async () => {
        try {
            await recoverPassword({ email });
            enqueueSnackbar('Email sent successfully', { variant: 'success' });
            navigate('/login')
        } catch (error) {
            if (error instanceof FirebaseError) {
                enqueueSnackbar(`Failed to send email ${error.code}`, { variant: 'error' });
            }
            console.error(error);
        }
    }

    useDocumentTitle('Recover password');

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#fefdf7',
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, width: 400, mb: 4 }}>
                <Box sx={{ mb: 2 }}>
                    <img src='sapere.svg' alt='logo' height={55} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', width: '100%', gap: 0.5, p: 1 }}>
                    <Typography variant='h6' sx={{ fontWeight: 700 }}>
                        Reset your password
                    </Typography>
                    <Typography variant='body2'>
                        We will send you an email with instructions to reset your password.
                    </Typography>
                </Box>
                <Box sx={{ width: 400, backgroundColor: 'white', border: '1px solid #e9e9e9', borderRadius: '10px', }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4, p: 4 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
                            <TextInput label='Email' value={email} placeholder={'Email'} name={'Email address'} onChange={(e) => setEmail(e)} multiline={false} />
                            <MainButton disabled={email.length === 0} onClick={handleRecoverPassword}>
                                <Typography variant='body2' sx={{ fontWeight: 700, pt: 0.5, pb: 0.5 }}>
                                    Reset password
                                </Typography>
                            </MainButton>

                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <Typography variant='caption' sx={{ color: grey[600] }}>
                        By signing in, you agree to our <Link underline='hover' color={'#007DFC'} fontWeight={500} href='' target="_blank">Terms of Service</Link> and <Link underline='hover' color={'#007DFC'} fontWeight={500} target="_blank" href=''>Privacy Policy</Link>.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default RecoverPasswordPage;
