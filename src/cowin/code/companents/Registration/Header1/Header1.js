import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconBut';
import MenuIcon from '@mui/icons-material/Menu';
import './Header1.scss';
import UnderlineLink from '../Link/Link';
import BasicButtons from '../Button1/Button1';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='Header1' sx={{ backgroundColor: '#1e3770;', color: "White"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div"  sx={{ flexGrow: 1 , fontSize:15}}>
           Ministry Of Health and 
           Family Welfare 
          </Typography>
          <BasicButtons />
        </Toolbar>
        
      </AppBar>
    </Box>
  );
}
