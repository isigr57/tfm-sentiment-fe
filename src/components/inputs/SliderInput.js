import React, { useState, useEffect } from 'react';
import { Box, Slider, Typography } from '@mui/material';
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


const SliderInput = ({ name, description, min, max, step, initialValue, onChange }) => {
    const [value, setValue] = useState(null);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

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
        <Box sx={{ display: "grid", alignItems: "center" }}>
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
            <Slider
                value={typeof value === 'number' ? value : 0}
                min={min}
                max={max}
                step={step}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
                sx={{
                    color: '#007DFC',
                    boxShadow: 'none', // Customize the slider track color
                    '& .MuiSlider-thumb': {
                        border: '1px solid #757575',
                        backgroundColor: 'white',
                        boxShadow: 'none', // Remove the thumb shadow
                        height: 16,
                        width: 16,
                        '&:hover': {
                            boxShadow: 'none',
                        },
                    },
                    '& .MuiSlider-rail': {
                        height: 6,
                        backgroundColor: grey[400],
                        opacity: 1 // Customize the slider rail color
                    },
                }}
            />
        </Box>
    );
}

export default SliderInput;
