import React from 'react'
import './Auth.css'

function Auth() {
    return (
        <div className="auth">
            <h1>Instagram</h1>
            <form className="auth__form__login">
                <h3>Log In to see photos and videos from your friends</h3>
                <input 
                    type="mail" 
                    className="login__inputMail"
                    placeholder="email"
                    value=""
                />
                <input 
                    type="password" 
                    className="login__inputPassword"
                    placeholder="password"
                    value=""
                />
                <button className="login__button">Login</button>
            </form>
            <form action="" className="auth__form__signup">
                <h3>Sign up to see photos and videos from your friends.</h3>
                <input 
                    type="text" 
                    className="signup__username"
                    placeholder="username"
                    value=""
                />
                <input 
                    type="mail" 
                    className="signup__mail"
                    placeholder="email"
                    value=""
                    />
                <input 
                    type="password" 
                    className="signup__password"
                    placeholder="password"
                    value=""
                />
                <button className="signup__button">Sign Up</button>
            </form>
        </div>
    )
}

export default Auth
