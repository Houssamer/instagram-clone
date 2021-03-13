import React from 'react'
import avatar from '../../../_MG_8623.jpg'
import './HeaderP.css'

function HeaderP({username}) {
    return (
        <div className="post__header">
            <img src={avatar} alt="post avatar" className="post__avatar"/>
            <h4 className="post__username">{username}</h4>
        </div>
    )
}

export default HeaderP
