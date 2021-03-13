import React from 'react'
import './Comments.css'

function Comments() {
    return (
        <div className="post__comments">
            <div className="post__comment">
                    <p><strong>OtherName</strong> Here is a comment</p>
                    <p><strong>OtherName</strong> Here is a comment</p>
            </div>
            <div className="post__input">
                <form className="comment__form">
                    <input 
                        type="text" 
                        className="comment__input"
                        placeholder="Add a comment"
                    />
                    <button className="post__comment__button">Post</button>
                </form>
            </div>
        </div>
    )
}

export default Comments
