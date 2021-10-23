
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { color, fontWeight } from '@mui/system';
import { Avatar } from '@mui/material';

import TextField from '@mui/material/TextField';
import rlogo from  '../images/rlogo.svg';



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '.5px', transform: 'scale(0.8)',  }} 
  >
    
  </Box>
);

export default function BasicCard() {
  return (
    <div className="main--form" style={{backgroundColor:"whitesmoke"}}>
    
    <Card sx={{ minWidth: 275,marginTop:10, marginLeft:50 , marginRight:50 }} className='main--card'>
      
      <CardContent >
        <div className='otp-logo'style={{width:120,height:120, backgroundColor:'#fff',borderRadius:80}}>
      <Avatar  sx={{width:80, height:70, ml:20}} alt="Travis Howard"  src={rlogo} alt='30'></Avatar>
      </div>

        
        <Typography variant="h5" component="div"  color="primary" align="center" sx={{mt:10}}>
          Register{bull}or{bull}Sign In{bull}for Vaccination{bull}
        </Typography>
        <Typography sx={{ mb: 1.5 ,mt:2}} color="text.secondary" >
          An otp will be sent ypur mobile number for verification
        </Typography>
        <TextField sx={{ml:12}}id="standard-basic" label="Enter Your Mobile Number" variant="standard" />
      </CardContent>
      <CardActions>
        <div style={{flexDirection:'Column'}}>
      <Button sx={{width:350,ml:4}} variant="contained">Get Otp</Button>
      <p className='terms--condition' style={{color:'#9f9f9f',fontweight: 200,fontsize: 7,paddingLeft:0, paddingTop:6}}> By Sign In/Registration, I agree to the Terms of Service and Privacy Policy</p>
        </div>
     </CardActions>
    </Card>
    </div>
  );
}
