//String
//int
//float .2f
//bool
//File (file)
import { Box, Switch, Typography } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import React from "react";
import { useEffect } from "react";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import InputsTooltip from "./components/InputsTooltip";
import { useState } from "react";


// Checks boundaires of the input
// String min max len + regex
// int min max

// name + description

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 36,
    height: 20,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: '#007DFC',
                opacity: 1,
                border: 0,
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        boxShadow: 'none',
        width: 16,
        height: 16,
    },
    '& .MuiSwitch-track': {
        borderRadius: 20 / 2,
        backgroundColor: grey[400],
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

const BoolInput = ({ name, description, initialValue = false, onChange }) => {
    const [value, setValue] = useState(null);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    const handleToggleChange = (event) => {
        setValue(event.target.checked);
        if (onChange) {
            onChange(event.target.checked);
        }
    };

    return (
        <Box sx={{ display: "flex", alignItems: "center" }} gap={1}>
            <Typography variant="body2">{name}</Typography>
            {description ? <InputsTooltip title={description} placement="top">
                <InfoOutlinedIcon style={{ color: grey[600], fontSize: 16 }} />
            </InputsTooltip> : null}
            <Box flexGrow={1} />
            <IOSSwitch checked={value == null ? false : value} onChange={handleToggleChange} />
        </Box>
    );
}

export default BoolInput;