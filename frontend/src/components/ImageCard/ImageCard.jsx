import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const ImageCard = ({ imageData, onClick }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px auto', boxShadow: 3, cursor:'pointer' }} onClick={() => onClick(imageData)}>
      <CardMedia
        component="img"
        height="300"
        image={imageData.image}
        alt={imageData.title}
        sx={{ borderRadius: '4px' }}
      />
      <CardContent>
        <div style={{display:'flex', justifyContent:'space-between'}} >
        <Typography gutterBottom variant="h5" component="div">
          {imageData.title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
          Views: {imageData.views}
        </Typography>
        </div>
       

        <Typography variant="body2" color="text.secondary">
          {imageData.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
