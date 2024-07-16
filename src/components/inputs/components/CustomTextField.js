import { InputBase } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        borderRadius: 6,
        border: '1px solid',
        borderColor: grey[300],
        fontSize: 16,
        padding: '8px 10px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ])
    },
}));

export default CustomTextField;

