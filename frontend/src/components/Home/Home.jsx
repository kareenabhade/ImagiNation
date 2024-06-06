import React, { useEffect, useState } from "react";
import { Grid, Typography, Container, Button, Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import ImageCard from "../ImageCard/ImageCard";
import ImageModal from "../ImageModal/ImageModal";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    const [data, setData] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const getData = async () => {
        try {
            const response = await fetch('/api/images');
            const allImages = await response.json();
            setData(allImages);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    const updateViews = async (imageId) => {
        try {
            await fetch(`/api/images/${imageId}/views`, {
                method: 'PATCH',
            });
        } catch (error) {
            console.error('Error updating views:', error);
        }
    };

   const handleCardClick = async (imageData) => {
    setSelectedImage(imageData);
    setModalOpen(true);
    try {
        const response = await fetch(`/api/images/view/${imageData._id}`, {
            method: 'PATCH',
        });
        if (!response.ok) {
            throw new Error('Failed to update views');
        }
        // Update the views count in the local state
        setData((prevData) =>
            prevData.map((image) =>
                image._id === imageData._id ? { ...image, views: image.views + 1 } : image
            )
        );
    } catch (error) {
        console.error('Error updating views:', error);
    }
};


    const handleModalClose = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleUploadClick = () => {
        navigate('/upload'); // Navigate to the upload page
    };

    return (
        <>
        <Navbar />
        <Box sx={{height:'100px'}}></Box>
        <Container maxWidth="lg" sx={{ marginTop: '20px' }}>
            <Grid container spacing={3}>
                {data.map((image) => (
                    <Grid item key={image._id} xs={12} sm={6} md={4}>
                        <ImageCard imageData={image} onClick={handleCardClick} />
                    </Grid>
                ))}
            </Grid>
            {selectedImage && (
                <ImageModal
                    open={modalOpen}
                    handleClose={handleModalClose}
                    imageData={selectedImage}
                />
            )}
        </Container>
        </>
    );
}

export default Home;
