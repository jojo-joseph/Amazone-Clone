import React, {useState} from 'react'
import "./Login.css"
import { Link, useHistory } from "react-router-dom";
import loginimg from "./Images/amzoneimg.jpg";
import { auth } from "./firebase";


function Login() {

    const history= useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault();  // this will stop the refresh!!!

        auth.signInWithEmailAndPassword(email, password)
            .then((auth)=>{
                //redirected to home page
                history.push("/");

            })
            .catch((e) =>alert(e.message));
    }

    const register = (event) => {
        event.preventDefault();  //this will stop the refresh!!

        auth.createUserWithEmailAndPassword(email, password)
        .then(auth=> {
            //create a user logged in redirected to home page
            history.push("/");

        })
        .catch((e) => alert(e.message));

    };

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login_logo"
                    src={loginimg}
                    alt="" 
                />

            </Link>
            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={event=>setEmail(event.target.value)}></input>
                    <h5 >Password</h5>
                    <input type="password" value={password} onChange={event=>setPassword(event.target.value)}></input>
                    <button type="submit" onClick={login} className="loginSignInButton">Sign In</button>
                </form>

                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.

                </p>
                <button onClick={register} className="login_registerButton">Create Your Amazone Account</button>
            </div>
                
        </div>
    )
}

export default Login
