import React from 'react'
// import "./Index.scss"
import Logo from "../Images/logo.png"
import Button from '@mui/material/Button';

function Index() {
    return (
        <div>
            <div className="header">
                <img src={Logo} alt="" />
            </div>
            <Button variant="contained">Contained</Button>
        </div>
    )
}

export default Index;
