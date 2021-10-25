import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from  '../images/logo.jpg';
import '../Header2/Header2.scss';
import BasicSelect from './Dropdown/Dropdown';
import { height } from '@mui/system';


export default function ButtonAppBar2() {
  return (
   
      <AppBar  className='Header2' position="relative" sx={{backgroundColor:'white',height:80,}} style={{width:"100%"}}>
      <div style={{display:'flex',}}> 
        <div className="logo--div" >
          <img src={logo} style={{width:130,height:72,marginLeft:245,marginTop:6}}></img>
        </div>
        <div id='dropdown--list'>
          <BasicSelect  />
          
          </div>
          <div id='dropdown--list'>
          <BasicSelect  />
          
          </div>
          <div id='dropdown--list'>
          <BasicSelect  />
          
          </div>
          <div id='dropdown--list'>
          <BasicSelect  />
          
          </div>
      </div>
      </AppBar>
  
  );
}
