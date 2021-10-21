import React from 'react'
import "./Index.scss"
import Logo from "./Images/logo.png"
import GetMethod from './GetMethod/GetMethod'

function Index() {
    return (
        <div>
            <div className="header">
                <img src={Logo} alt="Logo"/>
            </div>
            <GetMethod />
        </div>
    )
}

export default Index
