
import { styled } from '@mui/material/styles';
import { Tooltip } from '@mui/material';
import { tooltipClasses } from '@mui/material/Tooltip';


const InputsTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: 'black',
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'black',
        fontSize: 12,
    },
}));

export default InputsTooltip;