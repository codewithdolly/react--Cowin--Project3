import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import './Header1.scss';
import UnderlineLink from '../Link--Header1/Link1';
import BasicButtons from '../Button--header1/Button1';
import Tabs from '@mui/material/Tabs';
import Link1 from '../Link--Header1/Link1';
import { Link } from '@mui/material';

export default function TabsWrappedLabel() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        style={{backgroundColor:'#1e3770'}}
      >
        <div className='tab--first' style={{display:'flex'}}>
          <Typography sx={{color:'white',fontSize:17,ml:25,mt:2}}>Ministry of Health and <br/> Family Welfare</Typography>
          <Link1 />
          <BasicButtons/>
        </div>
      </Tabs>
    </Box>
  );
}