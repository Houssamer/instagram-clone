import React from 'react'
import './HeaderP.css'
import def from '../../../wallpaperflare.com_wallpaper.jpg'


function HeaderP({username, avatar, user}) {
    return (
        <div className="post__header">
            <img src={username === user ? avatar : def} alt="post avatar" className="post__avatar"/>
            <h4 className="post__username">{username}</h4>
        </div>
    )
}

export default HeaderP
