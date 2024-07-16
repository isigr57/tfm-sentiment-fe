import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { grey } from '@mui/material/colors';
import InputsTooltip from './components/InputsTooltip';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        border: 'none',
        fontSize: 18,
        width: 'auto',
    },
    // Customize the input arrow bo
}));


const NumberInput = ({ name, description, min, max, step, initialValue, onChange }) => {
    const [value, setValue] = useState(null);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    const handleInputChange = (event) => {
        const newValue = event.target.value === '' ? '' : Number(event.target.value);
        if (newValue >= min && newValue <= max) {
            setValue(newValue);
            if (onChange) {
                onChange(newValue);
            }
        }
    };

    const handleBlur = () => {
        if (value < min) {
            setValue(min);
        } else if (value > max) {
            setValue(max);
        }
    };

    return (
        <Box sx={{ display: "flex", alignItems: "center" }} gap={1}>
            <Typography variant="body2">{name}</Typography>
            {description ? <InputsTooltip title={description} placement="top">
                <InfoOutlinedIcon style={{ color: grey[600], fontSize: 16 }} />
            </InputsTooltip> : null}
            <Box flexGrow={1} />
            <BootstrapInput
                value={value}
                size="small"
                onChange={handleInputChange}
                onBlur={handleBlur}
                inputProps={{
                    step: step,
                    min: min,
                    max: max,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                }}
            />
        </Box>

    );
}

export default NumberInput;
