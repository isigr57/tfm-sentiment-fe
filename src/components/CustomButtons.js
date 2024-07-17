import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { mainBlue } from './CustomColors';



const PopMenuButton = styled(Button)((_) => ({
    color: 'black',
    backgroundColor: 'transparent',
    borderRadius: '6px',
    textTransform: 'none',
    padding: '8px 16px',
    margin: '0px',
    '&:hover': {
        backgroundColor: mainBlue[100],
    }
}));

const GreyButtonWithBorder = styled(Button)((_) => ({
    color: grey[900],
    backgroundColor: 'transparent',
    borderRadius: '6px',
    textTransform: 'none',
    padding: '8px 16px',
    margin: '0px',
    border: '1px solid #e9e9e9',
    '&:hover': {
        backgroundColor: grey[200],
    }
}));

const MainButton = styled(Button)((_) => ({
    color: 'white',
    fontWeight: 700,
    backgroundColor: mainBlue[500],
    borderRadius: '6px',
    padding: '5px 12px',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: mainBlue[900],
    },
    '&:disabled': {
        backgroundColor: grey[200],
        color: grey[500],
    }
}));

const NavBarButton = styled(Button)((_) => ({
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: '15px',
    textTransform: 'none',
    padding: '6px',
    margin: '0px',
    gap: '5px',
    '&:hover': {
        backgroundColor: mainBlue[100],
    },
    //remove start icon margin
    '& .MuiButton-startIcon': {
        margin: 0,
    }
}));

const ModalConfirmButton = styled(Button)((_) => ({
    color: 'white',
    backgroundColor: 'black',
    borderRadius: '6px',
    textTransform: 'none',
    padding: '8px ',
    margin: '0px',
    '&:hover': {
        backgroundColor: grey[600],
    }
}));

const ModalCancelButton = styled(Button)((_) => ({
    color: 'black',
    backgroundColor: grey[300],
    borderRadius: '6px',
    textTransform: 'none',
    padding: '8px ',
    margin: '0px',
    '&:hover': {
        backgroundColor: grey[600],
    }
}));


export { MainButton, GreyButtonWithBorder, NavBarButton, PopMenuButton, ModalConfirmButton, ModalCancelButton };