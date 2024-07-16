import React, { useState } from 'react';
import { Typography, Box, Divider } from '@mui/material';
import { useAuth } from '../AuthContext';
import { grey } from '@mui/material/colors';
import Link from '@mui/material/Link';
import { useSnackbar } from 'notistack';
import { FirebaseError } from 'firebase/app';
import { GreyButtonWithBorder, MainButton } from '../../components/CustomButtons';
import TextInput from 'components/inputs/TextInput';
import useDocumentTitle from 'utils/useDocumentTitle';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { googleSignIn, emailSignIn } = useAuth();

    const { enqueueSnackbar } = useSnackbar();

    const handleLogin = async () => {
        try {
            const user = await emailSignIn({ email, password });
            if (user.emailVerified) {
                enqueueSnackbar('Signed in successfully', { variant: 'success' });
            }
            else {
                enqueueSnackbar('Please verify your email', { variant: 'warning' });
            }
        } catch (error) {
            if (error instanceof FirebaseError) {
                enqueueSnackbar(`Failed to sign in error ${error.code}`, { variant: 'error' });
            }
            console.error(error);
        }
    }

    const googleLogIn = async () => {
        try {
            await googleSignIn();
            enqueueSnackbar('Signed in successfully', { variant: 'success' });
        } catch (error) {
            if (error instanceof FirebaseError) {
                enqueueSnackbar(`Failed to sign in error ${error.code}`, { variant: 'error' });
            }
            console.error(error);
        }
    }

    useDocumentTitle('Login');

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
                    <Typography variant='h5' sx={{ fontWeight: 700 }}>
                        Log In
                    </Typography>
                    <Typography variant='body'>
                        Don't have an account? <Link href='/signup' underline='hover' color={'#007DFC'} fontWeight={700}>Sign up.</Link>
                    </Typography>
                </Box>
                <Box sx={{ width: 400, backgroundColor: 'white', border: '1px solid #e9e9e9', borderRadius: '10px', }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4, p: 4 }}>
                        <GreyButtonWithBorder onClick={googleLogIn} sx={{ width: '100%' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                                <img src='google.svg' alt='google' />
                                <Typography variant='body2' sx={{ pt: 0.25, pb: 0.25, fontWeight: 700 }}>
                                    Continue with Google
                                </Typography>
                            </Box>
                        </GreyButtonWithBorder>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1, width: '100%' }}>
                            <Divider width={100} />
                            <Typography variant='body2' >
                                or continue with
                            </Typography>
                            <Divider width={100} />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
                            <TextInput label='Email' value={email} placeholder={'Email'} name={'Email address'} onChange={(e) => setEmail(e)} multiline={false} />
                            <TextInput label='Password' value={password} placeholder={'Password'} name={'Password'} onChange={(e) => setPassword(e)}
                                tipChild={<Typography variant='caption' sx={{ mt: 0.5 }}>
                                    <Link href='/recoverPassword' underline='hover' color={'#007DFC'}>
                                        Forgot password?
                                    </Link>
                                </Typography>}
                                multiline={false} />
                            <MainButton disabled={password.length === 0 || email.length === 0} onClick={handleLogin}>
                                <Typography variant='body2' sx={{ fontWeight: 700, pt: 0.25, pb: 0.25 }}>
                                    Log In
                                </Typography>
                            </MainButton>

                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <Typography variant='caption' sx={{ fontWeight: 200, color: grey[600] }}>
                        By signing in, you agree to our <Link underline='hover' color={'#007DFC'} fontWeight={500} href='#' target="_blank">Terms of Service</Link> and <Link underline='hover' color={'#007DFC'} fontWeight={500} target="_blank" href='https://www.timbal.ai/en/legal-notice.html'>Privacy Policy</Link>.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default LoginPage;
