import React, {useState, useEffect} from 'react'
import Header from './Component/Header'
import Posts from './Component/Posts'
import './Insta.css'
import {db} from '../firebase'


function Insta({Logout, open, setOpen}) {

    const [openUpload, setOpenUpload] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                postInfo: doc.data()
            })))
        ))
    }, [])

    function handleClose(event) {
        event.preventDefault();
        setOpenUpload(!openUpload);
    }

    return (
        <>
        <div className="upload__modal" style={{display: !openUpload && 'none'}}>
           <form className="upload__form">
                <progress value="20" max='100' className="upload__progress" />
                <input type="file" className="upload__input"/>
                <button className="upload__button">Upload</button>
                <button className="upload__buttonClose" onClick={handleClose}>Close</button>
           </form> 
        </div>
        <div className="insta" style={{display: openUpload && 'none'}}>
            <Header Logout={Logout} open={open} setOpen={setOpen} handleClose={handleClose}/>
            <Posts posts={posts} />
        </div>
        </>
    )
}

export default Insta
