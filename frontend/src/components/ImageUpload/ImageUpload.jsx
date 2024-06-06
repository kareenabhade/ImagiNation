import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, TextField, Typography, Box } from '@mui/material';

const ImageUpload = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'image_preset');
            formData.append('cloud_name', 'dlxdukj6m');

            try {
                const res = await fetch('https://api.cloudinary.com/v1_1/dlxdukj6m/image/upload', {
                    method: 'POST',
                    body: formData,
                });

                const data = await res.json();
                setImage(data.url.toString());
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const imgData = {
            title,
            description,
            image,
        };

        try {
            const response = await fetch('/api/images/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(imgData),
            });

            if (!response.ok) {
                throw new Error('Error in posting image');
            }

            console.log('Image uploaded successfully');
            navigate('/home');
        } catch (error) {
            console.error('Error in uploading image:', error);
        }
    };

    return (
        <Container maxWidth="xs">
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="100vh">
                <Typography variant="h4">Upload Image</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <input type="file" onChange={handleImageChange} required />
                    <Button type="submit" variant="contained" color="primary">
                        Upload
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default ImageUpload;
