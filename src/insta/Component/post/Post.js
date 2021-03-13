import React from 'react';
import HeaderP from './HeaderP';
import ContentP from './ContentP';
import Comments from './Comments';
import './Post.css'

function Post({username, caption, imgUrl, postId, user, avatar}) {
    return (
        <div className="post">
            <HeaderP username={username} avatar={avatar} user={user} />
            <ContentP username={username} caption={caption} imgUrl={imgUrl} />
            <Comments postId={postId} user={user} />
        </div>
    )
}

export default Post
