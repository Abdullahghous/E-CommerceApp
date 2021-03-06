import React, { useState } from 'react';
import './login.css';
import {Link, useHistory} from 'react-router-dom';
import { auth } from './firebase';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        // firebase Login
        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=>{
            if(auth){
                history.push('/')
            }
        })
        .catch(error=>alert(error.message))
    }

    const register = (e) => {
        e.preventDefault();
        // firebase register
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
           if(auth) {
               history.push('/');
           }
        })
        .catch(error => alert(error.message));
    }


    return (
        <div className="login">
            <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" 
             alt=""
             className="login_logo"
            />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                    type="text"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input 
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button className="login_signin_button" type="submit" onClick={signIn}>Sign In</button>
                </form>
                <p>
                By continuing, you agree to Amazon's DUMMY CLONE Conditions of Use and Privacy Notice.
                </p>
                <button className="login_register_button" onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
