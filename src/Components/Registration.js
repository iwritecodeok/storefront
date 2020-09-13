import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import Logo from "../Assets/shamazon-logoBlk.png";
import "../Styles/Registration.scss"
import { auth } from '../firebase';

function Registration() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [displayName, setDisplayName] = useState('');
    
    const register = e =>{
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            //created a user and logged in redirect to home
            history.push("/");
        })
        .catch((e)=> alert(e.message))
    }


    return (
        <div className="registration">
            <Link to ='/'>
                <img 
                className="registration__logo"
                src ={ Logo }
                alt=""/>
            </Link>
            <div className ="registration__container">
                <h1>Create Account</h1>
                <form>
                    {/* name */}
                    {/* <h5>Your Name</h5>
                    <input value = { displayName } onChange={e=>setDisplayName(e.target.value)} type = "text"/> */}
                    {/* email */}
                    <h5>E-Mail</h5>
                    <input value ={ email } onChange={e => setEmail(e.target.value)} type="email"/>
                    {/* pass */}
                    <h5>Password</h5>
                    <input type = "password"/>
                    {/* conf pass */}
                    <h5>Re-enter Password</h5>
                    <input value ={ password } onChange={e => setPassword(e.target.value)} type="password"/>
                    <Link to = '/registration'>
                    {/* <button className="register__button">Create your shAmazon Account</button> */}
                    <button onClick={ register } className="register__button">Create your shAmazon Account</button>
                    </Link>
                    
                </form>
                <p>By creating an account, you agree to shAmazon's Conditions of Use and Privacy Notice.</p>
            </div>
            
        </div>
    )
}

export default Registration
