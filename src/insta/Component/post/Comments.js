import React, {useState, useEffect} from 'react'
import './Comments.css'
import {db} from '../../../firebase'
import firebase from 'firebase'

function Comments({postId, user}) {

    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('')

    useEffect(() => {
        let unsubscribe;
        unsubscribe = db.collection('posts').doc(postId).collection('comments').orderBy('timestamp', 'asc').onSnapshot(snapshot => (
            setComments(snapshot.docs.map((doc) => (doc.data())))
        ));

        return () => {
            unsubscribe();
        }
    }, [postId])


    function postComment(event)  {
        event.preventDefault();

        db.collection('posts').doc(postId).collection('comments').add({
            username: user,
            text: comment,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setComment('');
    }

    return (
        <div className="post__comments">
            <div className="post__comment">
                {comments.map((comment, index) => (
                    <p key={index}>
                        <strong>{comment.username}</strong> {comment.text}
                    </p>
                ))}
            </div>
            <div className="post__input">
                <form className="comment__form">
                    <input 
                        type="text" 
                        className="comment__input"
                        placeholder="Add a comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <button 
                        className="post__comment__button" 
                        onClick={postComment} 
                        disabled={!comment}
                    >
                        Post
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Comments
