import React from 'react'
import Post from './post/Post'
import './Posts.css'

function Posts({posts, user, avatar}) {
    return (
        <div className="posts">
            <h1 style={{display: !posts && 'none'}}>No posts yet</h1>
           { posts.map((post) => (
                <Post 
                    key={post.id} 
                    username={post.postInfo.username} 
                    caption={post.postInfo.caption} 
                    imgUrl={post.postInfo.imageUrl}
                    postId={post.id}
                    user={user}
                    avatar={avatar}
                />
            ))}
        </div>
    )
}

export default Posts
