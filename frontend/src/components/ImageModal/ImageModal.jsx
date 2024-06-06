import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const ImageModal = ({ open, handleClose, imageData }) => {
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box 
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'column'
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2">
          {imageData.title}
        </Typography>
        <img src={imageData.image} alt={imageData.title} style={{ width: '80%', borderRadius: '4px', margin: '20px 0' }} />
        <Typography id="modal-description" sx={{ mt: 2 }}>
          {imageData.description}
        </Typography>
        <Button onClick={handleClose} variant="contained" color="primary" sx={{ marginTop: '20px' }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default ImageModal;
