import React, {useState} from 'react'
import logo from '../../735145cfe0a4.png'
import './Header.css'

function Header(props) {
    
    return (
        <div className="insta__header">
            <img src={logo} alt="logo" className="insta__logo"/>
            <div className="upload">
                <button className="open__upload__button" onClick={props.handleClose}>Upload</button>
            </div>
            <div className="insta__avatar">
                <img 
                    src={props.avatar} 
                    alt="insta avatar" 
                    className="avatar__img" 
                    onClick={() => props.setOpen(!props.open)}
                    style={{border : !props.open ? 'none' : '1px solid black'}}
                />
            </div>
            <div className="option" style={{display : props.open ? 'block' : 'none'}}>
                <button className="change__button" onClick={props.change}>Change</button>
                <button className="logout__button" onClick={props.Logout}>Log Out</button>
            </div>
        </div>
    )
}

export default Header
