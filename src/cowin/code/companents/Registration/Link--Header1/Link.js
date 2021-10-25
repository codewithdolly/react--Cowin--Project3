import { Typography } from '@mui/material'
import React from 'react'
import './Link.scss';

function Link1() {
  return (
    <div style={{display:'flex',paddingLeft:300,mt:10}}  className='Link--tab'>
      <br/>
      <Typography style={{mt:10}} id='link1--tab'  >Verify Certificate   </Typography>
      <Typography id='link1--tab'   >Dashboard</Typography>
      
    </div>
  )
}

export default Link1

