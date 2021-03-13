import React, {useState, useEffect} from 'react'
import './Auth.css'
import {auth} from '../firebase'


function Auth({User, setUser}) {

    const [signUpIsClicked, setSignedUpIsClicked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [update, setUpdate] = useState(false);



    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                console.log(authUser.displayName)
                setUser(authUser.displayName);
                console.log(User)
            } else {
                setUser('');
            }
            setUpdate(false);
            console.log(update);
            console.log(User);
        })

        return () => {
            unsubscribe();
        } 
    }, [User, setUser, update]);

    function handleClick(event) {
        event.preventDefault();
        setSignedUpIsClicked(!signUpIsClicked)
    }

    const Login = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .catch((error) => alert(error.message));

        setUpdate(true);
    }

    const signUp = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            return authUser.user.updateProfile({
                displayName: username
            })
        })
        .catch((error) => alert(error.message));
        
        setUpdate(true);
    }

    return (
        <div className="auth">
            <h1>Instagram</h1>
            <form className="auth__form__login" style={{display : signUpIsClicked && 'none'}}>
                <h3>Log In to see photos and videos from your friends</h3>
                <input 
                    type="mail" 
                    className="login__inputMail"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    className="login__inputPassword"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="login__button" onClick={Login}>Login</button>
                <p>You don't have an account yet? 
                    <button className="signUp" 
                        onClick={handleClick} >Sign Up
                        </button></p>
            </form>
            <form className="auth__form__signup" style={{display: !signUpIsClicked && 'none'}}>
                <h3>Sign up to see photos and videos from your friends.</h3>
                <input 
                    type="text" 
                    className="signup__username"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    type="mail" 
                    className="signup__mail"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <input 
                    type="password" 
                    className="signup__password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="signup__button" onClick={signUp}>Sign Up</button>
                <p>You already have an account? <button className="login" onClick={handleClick}>Login</button></p>
            </form>
        </div>
    )
}

export default Auth
