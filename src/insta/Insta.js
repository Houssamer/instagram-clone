import React, {useState, useEffect} from 'react'
import Header from './Component/Header'
import Posts from './Component/Posts'
import './Insta.css'
import {db, storage} from '../firebase'
import firebase from 'firebase'


function Insta({Logout, open, setOpen, user}) {

    const [openUpload, setOpenUpload] = useState(false);
    const [openAvatar, setOpenAvatar] = useState(false);
    const [avatar, setAvatar] = useState(null);
    const [currentUserInfo, setCurrentUserInfo] = useState([]);
    const [avatarProgress, setAvatarProgress] = useState(0);
    const [posts, setPosts] = useState([]);
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                postInfo: doc.data()
            })))
        ))
    }, [])

    useEffect(() => {
    
        db.collection('Users').where('username', '==', user).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setCurrentUserInfo(doc.data())
            })
        })

    }, [user, openAvatar])

    function handleClose(event) {
        event.preventDefault();
        setOpenUpload(!openUpload);
    }

    function handleFile(event) {
        if(event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    }

    function handleUpload(event) {
        event.preventDefault();

        const upload = storage.ref(`images/${image.name}`).put(image);

        upload.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
            }, 
            (error) => {
                alert(error.message)
            },
            () => {
                storage
                    .ref('images')
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        db.collection('posts').add({
                            username: user,
                            caption: caption,
                            imageUrl: url,
                            timestamp: firebase.firestore.FieldValue.serverTimestamp()
                        })
                    });
                    setProgress(0);
                    setCaption('');
                    setImage(null);
                    setOpenUpload(!openUpload);
                
            }
        )
        

    }

    function change(event) {
        event.preventDefault();

        setOpenAvatar(!openAvatar)
    }

    function handleAvatarClose(event) {
        event.preventDefault();
        setOpenAvatar(!openAvatar);
    }

    function handleAvatarFile(event) {
        if (event.target.files[0]) {
            setAvatar(event.target.files[0]);
        }   
    }

    function handleAvatar(event) {
        event.preventDefault();

        const avatarUpload = storage.ref(`avatar/${avatar.name}`).put(avatar);

        avatarUpload.on(
            "state_changed",
            (snapshot) => {
                const avatarProgress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setAvatarProgress(avatarProgress);
            },
            (error) => {
                alert(error.message);
            },
            () => {
                storage
                    .ref('avatar')
                    .child(avatar.name)
                    .getDownloadURL()
                    .then((url) => {
                        db.collection('Users').add({
                            username: user,
                            avatar: url
                        })
                    });

                    setAvatar(null);
                    setAvatarProgress(0);
                    setOpenAvatar(!openAvatar);
                    setOpen(!open)
            }
        )
    }

    return (
        <>
        <div className="upload__modal" style={{display: !openUpload && 'none'}}>
           <form className="upload__form">
                <progress value={progress} max='100' className="upload__progress" />
                <input 
                    type="file" 
                    className="upload__input"
                    onChange={handleFile}
                />
                <input 
                    type="text" 
                    className="upload__caption"
                    placeholder="caption"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                />
                <button className="upload__button" onClick={handleUpload} disabled={(!image)} >Upload</button>
                <button className="upload__buttonClose" onClick={handleClose}>Close</button>
           </form> 
        </div>
        <div className="avatar__modal" style={{display: !openAvatar && 'none'}}>
           <form className="avatar__form">
                <progress value={avatarProgress} max='100' className="avatar__progress" />
                <input 
                    type="file" 
                    className="avatar__input"
                    onChange={handleAvatarFile}
                />
                <button className="avatar__button" onClick={handleAvatar} disabled={!avatar}>Upload</button>
                <button className="avatar__buttonClose" onClick={handleAvatarClose}>Close</button>
           </form> 
        </div>
        <div className="insta" style={{display: (openUpload || openAvatar) && 'none'}}>
            <Header 
                Logout={Logout} 
                open={open} 
                setOpen={setOpen} 
                handleClose={handleClose} 
                change={change} 
                avatar={currentUserInfo.avatar}
            />
            <Posts 
                posts={posts} 
                user={user}
                avatar={currentUserInfo.avatar}
            />
        </div>
        </>
    )
}

export default Insta
