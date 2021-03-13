import React from 'react';
import HeaderP from './HeaderP';
import ContentP from './ContentP';
import Comments from './Comments';
import './Post.css'

function Post({username, caption, imgUrl}) {
    return (
        <div className="post">
            <HeaderP username={username} />
            <ContentP username={username} caption={caption} imgUrl={imgUrl} />
            <Comments username={username} />
        </div>
    )
}

export default Post
