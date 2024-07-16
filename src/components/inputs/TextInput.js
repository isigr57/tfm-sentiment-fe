import { Box, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { grey } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import InputsTooltip from './components/InputsTooltip'; // Assuming you have this component
import CustomTextField from './components/CustomTextField';

const TextInput = ({ name, description, placeholder, initialValue, maxLength, regex, tip, tipChild, onChange, onBlur, multiline = true }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        setValue(initialValue ?? '');
    }, [initialValue]);


    const handleOnChange = (e) => {
        setError(false);
        const newValue = e.target.value;
        // Check if newValue meets maxLength requirement
        if (maxLength && newValue.length > maxLength) {
            setError(true);
        }
        // Check if newValue meets regex requirement
        if (regex && !new RegExp(regex).test(newValue)) {
            setError(true);
        }
        setValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    }

    return (
        <Box sx={{ display: "grid" }} gap={1}>
            <Box sx={{ display: "flex", alignItems: "center" }} gap={1}>
                <Typography variant="body2">{name}</Typography>
                {description ? <InputsTooltip title={description} placement="top">
                    <InfoOutlinedIcon style={{ color: grey[600], fontSize: 16 }} />
                </InputsTooltip> : null}
                <Box flexGrow={1} />
                {tipChild ?? <Typography sx={{ color: grey[500], fontSize: 12 }} >{tip}</Typography>}
            </Box>
            <Box>
                <CustomTextField
                    placeholder={placeholder}
                    value={value ?? ''}
                    size="small"
                    fullWidth
                    type={name === 'Password' ? 'password' : 'text'}
                    multiline={multiline}
                    onChange={handleOnChange}
                    onBlur={onBlur}
                    error={error} // Pass error state to input component
                    sx={{
                        '& .MuiInputBase-input': {
                            borderColor: error ? 'red' : grey[300],
                            '&:focus': {
                                borderColor: error ? 'red' : '#007DFC !important',
                            }, // Change border color if there's an error
                        },

                    }}
                />
                {error && (
                    <Typography variant="caption" color="error">
                        {maxLength && value.length > maxLength && `Exceeds max length of ${maxLength} characters.`}
                        {regex && !new RegExp(regex).test(value) && `Input does not match the required format.`}
                    </Typography>
                )}</Box>

        </Box>
    );
}

export default TextInput;
