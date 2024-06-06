import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import picture from './picture.png'

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ marginBottom: '50px', background:'black', zIndex:'1', position:'fixed' }}>
      <Toolbar >
        <img  style={{height:'40px', width:'40px', margin:'10px'}} src={picture} />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: 'pointer', fontFamily: "Cedarville Cursiv, cursive", fontWeight:'500' }}
          onClick={() => navigate('/')}
        >
          ImagiNation
        </Typography>
        <Box >
          <Button sx={{p:2}} color="inherit" onClick={() => navigate('/')}>
            Login
          </Button>
          <Button sx={{p:2}} color="inherit" onClick={() => navigate('/signup')}>
            Signup
          </Button>
          <Button sx={{p:2}} color="inherit" onClick={() => navigate('/upload')}>
            Upload Image
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
