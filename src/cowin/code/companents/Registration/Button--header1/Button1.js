import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Button1.scss';


export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row"  className="Stack--Button" sx={{ml:5,mt:3}}>
      <div className='tab-buttons'>
      <Button id='Buttons--tab' size="small" variant="outlined" className='Header--Button' >A</Button>
      <Button id='Buttons--tab' size="small" variant="outlined">A+</Button>
      <Button id='Buttons--tab' size="small"  variant="outlined">A+</Button>
      </div>
      </Stack>
     
  );
}

