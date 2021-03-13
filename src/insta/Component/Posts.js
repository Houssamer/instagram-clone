import React from 'react'
import Post from './post/Post'
import './Posts.css'

function Posts({posts}) {
    return (
        <div className="posts">
           { posts.map((post) => (
                <Post key={post.id} username={post.postInfo.username} caption={post.postInfo.caption} imgUrl={post.postInfo.imageUrl} />
            ))}
        </div>
    )
}

export default Posts
