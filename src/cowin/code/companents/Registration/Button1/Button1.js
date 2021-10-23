import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../Button1/Button1.scss';

export default function BasicButtons() {
  return (
    <Stack spacing={1} direction="row"  className="Stack--Button">
      
      <Button size="small" variant="outlined" className='Header--Button' >A</Button>
      <Button variant="outlined">A+</Button>
      <Button variant="outlined">A+</Button>
    </Stack>
  );
}
