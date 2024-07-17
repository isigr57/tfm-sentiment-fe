// SearchBarFlows.js
import React from 'react';
import { InputBase, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SearchRounded } from '@mui/icons-material';
import { grey } from '@mui/material/colors';

const SearchBarContainer = styled(Box)(({ _ }) => ({
    background: '#fff',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    border: 'solid #e9e9e9',
    borderWidth: 2,
    padding: 2,
    zIndex: 1000,
    '&:focus-within': {
        borderColor: '#007DFC',
    },
    '&:hover': {
        borderColor: '#007DFC',
    },
    '&:hover .MuiSvgIcon-root': {
        color: '#007DFC',
    },
    '&:focus-within .MuiSvgIcon-root': {
        color: '#007DFC',
    },
}));

const CustomTextField = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        borderRadius: 6,
        border: 'none',
        width: '100%', // Full width within the container
        borderColor: grey[300],
        fontSize: 16,
        fontWeight: 500,
        padding: '12px 8px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // placeholder color
        '&::placeholder': {
            color: grey[400],
        },
    },
}));



const SearchBar = ({ onSearch, placeholder }) => {

    const handleSearch = (event) => {
        onSearch(event.target.value);
    }

    return (
        <SearchBarContainer>
            <SearchRounded sx={{ color: grey[300], pl: 1.5 }} />
            <CustomTextField
                variant="outlined"
                fullWidth
                placeholder={placeholder}
                onChange={handleSearch}
            />
        </SearchBarContainer>
    );
};

export default SearchBar;
