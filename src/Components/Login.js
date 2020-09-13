import React, { useState } from 'react';
import '../Styles/Login.scss';
import { Link, useHistory } from 'react-router-dom';
import Logo from "../Assets/shamazon-logoBlk.png";
import { auth } from '../firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = e =>{
    e.preventDefault(); //this stops page refresh on submit!!!
    //logic
    auth
    .signInWithEmailAndPassword(email, password)
    .then((auth)=>{
        //redirect to home
        history.push('/');
    })
    .catch((e)=> alert(e.message))
    }

    const register = e =>{
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            //created a user and logged in redirect to home
        })
        .catch((e)=> alert(e.message))

    }

    return (
        <div className="login">
            <Link to ="/">
                <img 
                className="login__logo"
                src = { Logo }
                alt=""/>
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                <h5>E-mail</h5>
                <input value ={ email } onChange={e => setEmail(e.target.value)} type="email"/>
                <h5>Password</h5>
                <input value ={ password } onChange={e => setPassword(e.target.value)} type="password"/>
                <button onClick={ login } type ='submit' className="login__signIn">
                    Sign in
                </button>
                </form>
                <p>
                    By continuing, you agree to shAmazon's Conditions of Use and Privacy Notice.
                </p>
                
                <button onClick={ register } className="login__signUp">Create your shAmazon Account</button>
            </div>
        </div>
    )
}

export default Login
