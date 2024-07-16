import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { grey } from '@mui/material/colors';
import { FileUploadRounded, CloseRounded } from '@mui/icons-material';
import InputsTooltip from './components/InputsTooltip';
import CustomTextField from './components/CustomTextField';


const TextInput = ({ name, description, initialValue, tip, onChange }) => {
    const [value, setValue] = useState(null);
    const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    const handleTextInputChange = (e) => {
        setValue(e.target.value);
        setFile(null);
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const handleFileInputChange = (e) => {
        if (e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            setValue(selectedFile.name);
            if (onChange) {
                onChange(selectedFile);
            }
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleRemoveFile = () => {
        setValue('');
        setFile(null);
        if (onChange) {
            onChange('');
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files.length > 0) {
            const droppedFile = e.dataTransfer.files[0];
            setFile(droppedFile);
            setValue(droppedFile.name);
            if (onChange) {
                onChange(droppedFile);
            }
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    return (
        <Box sx={{ display: "grid" }} gap={1}>
            <Box sx={{ display: "flex", alignItems: "center" }} gap={1}>
                <Typography variant="body2">{name}</Typography>
                {description && (
                    <InputsTooltip title={description} placement="top">
                        <InfoOutlinedIcon style={{ color: grey[600], fontSize: 16 }} />
                    </InputsTooltip>
                )}
                <Box flexGrow={1} />
                <Typography sx={{ color: grey[500], fontSize: 12 }}>{tip}</Typography>
            </Box>
            <Box
                sx={{ display: "flex", alignItems: "center" }}
                gap={1} onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
            >
                <CustomTextField
                    placeholder={isDragging ? 'Drop file here' : 'Enter a URL, or upload a file'}
                    value={value}
                    size="small"
                    fullWidth
                    onChange={handleTextInputChange}
                    sx={{
                        '& .MuiInputBase-input': {
                            borderColor: isDragging ? '#007DFC' : grey[300],
                            border: isDragging ? '2px dashed #007DFC' : '',
                            '&:focus': {
                                borderColor: '#007DFC !important',
                            },
                        },
                    }}
                />
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileInputChange}
                />
                {!file ? (
                    <IconButton onClick={handleUploadClick}>
                        <FileUploadRounded style={{ fontSize: 24 }} />
                    </IconButton>
                ) : (
                    <IconButton onClick={handleRemoveFile}>
                        <CloseRounded style={{ fontSize: 24 }} />
                    </IconButton>
                )}
            </Box>
        </Box>
    );
}

export default TextInput;
