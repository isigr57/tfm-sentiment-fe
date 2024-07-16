import React from 'react';
import { Typography, Box } from '@mui/material';
import { useAuth } from '../AuthContext';
import { grey } from '@mui/material/colors';
import Link from '@mui/material/Link';
import { useSnackbar } from 'notistack';
import { FirebaseError } from 'firebase/app';
import { GreyButtonWithBorder, MainButton } from '../../components/CustomButtons';
import { useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import useDocumentTitle from 'utils/useDocumentTitle';

const VerifyEmailPage = () => {
    const { resendVerificationEmail, logOut } = useAuth();
    const { enqueueSnackbar } = useSnackbar();

    const navigate = useNavigate();

    const handleResendEmail = async () => {
        try {
            await resendVerificationEmail();
            enqueueSnackbar('Email verification sent', { variant: 'success' });
            navigate('/');
        }
        catch (error) {
            if (error instanceof FirebaseError) {
                enqueueSnackbar(`Failed to resend error ${error.code}`, { variant: 'error' });
            }
        }

    }

    const handleLogin = async () => {
        await logOut();
        navigate('/login');
    }

    useDocumentTitle('Verify Email');

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
                    <img src='sapere-long.svg' alt='logo' />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', width: '100%', gap: 0.5, p: 1 }}>
                    <Typography variant='h6' sx={{ fontWeight: 700 }}>
                        Verify your email
                    </Typography>
                    <Typography variant='body2'>
                        We have sent you an email with a link to verify your email address. Please check your inbox.
                    </Typography>
                </Box>
                <Box sx={{ width: 400, backgroundColor: 'white', border: '1px solid #e9e9e9', borderRadius: '10px', }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4, p: 4 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
                            <Typography variant='body2' sx={{ fontWeight: 700 }}>
                                Didn't receive the email?
                            </Typography>
                            <GreyButtonWithBorder onClick={handleResendEmail}>
                                <Typography variant='body2' sx={{ fontWeight: 700, pt: 0.25, pb: 0.25 }}>
                                    Resend email
                                </Typography>
                            </GreyButtonWithBorder>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1, width: '100%' }}>
                                <Divider width={150} />
                                <Typography variant='body2' >
                                    or
                                </Typography>
                                <Divider width={150} />
                            </Box>
                            <MainButton onClick={handleLogin}>
                                <Typography variant='body2' sx={{ fontWeight: 700, pt: 0.25, pb: 0.25 }}>
                                    Go to login
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

export default VerifyEmailPage;
