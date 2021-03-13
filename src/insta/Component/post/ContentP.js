import React from 'react'
import './ContentP.css'

function ContentP({username, caption, imgUrl}) {
    return (
        <div className="post__content">
            <img src={imgUrl} alt="post__img" className="post__img"/>
            <div className="caption">
                <p className="post__caption" style={{display: !caption && 'none'}}><strong>{username}</strong> {caption}</p>
            </div>
        </div>
    )
}

export default ContentP
