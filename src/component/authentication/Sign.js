import React, { useState } from 'react';
import './Auth.css';
import auth from '../authentication/firebase';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Link } from 'react-router-dom';
import AuthDetails from './AuthDetails';

const Sign = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // Form validation and values set on state...
    const isFieldValid = (e) => {
        let fieldValid;
        const regexForEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
        const regexForPassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        if (e.target.name === 'email') {
            fieldValid = regexForEmail.test(e.target.value);
        };

        if (e.target.name === 'password') {
            fieldValid = regexForPassword.test(e.target.value);
        };

        if (fieldValid) {
            if (e.target.name === 'email') {
                setEmail(e.target.value);
            }
            if (e.target.name === 'password') {
                setPassword(e.target.value);
            };
        };
    }


    // firebase authentication (sign up & sign in)
    const handleSubmit = (e) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert('successfully Register');
            })
            .catch((error) => {
                console.log(error.message);
            });

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert('successfully Login');
            })
            .catch((error) => {
                console.log(error.message);
            });

        e.preventDefault();
    };

    // handle google aunthentication....
    const handleGoogleSignIn = (provider) => {
        signInWithPopup(auth, provider)
            .then((res) => {
                console.log(res.user);
            })
            .catch((error) => {
                console.log(error.message);
            });
        console.log(email, password);
    }

    return (
        <div className="sign-container">
            <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                <h5 className="form-header">Sign in to our platform</h5>
                <div>
                    <label htmlFor="email" className="form-label">Your email</label>
                    <input onBlur={isFieldValid} type="email" name="email" id="email" className="email-field" placeholder="name@company.com" required />
                </div>
                <div>
                    <label htmlFor="password" className="form-label">Your password</label>
                    <input onBlur={isFieldValid} type="password" name="password" id="password" placeholder="••••••••" className="password-field" required />
                </div>
                <div className="flex items-start">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="checkbox-field" required />
                        </div>
                        <label htmlFor="remember" className="checkbox-text">Remember me</label>
                    </div>
                    <Link to="" className="password-recover">Lost Password?</Link>
                </div>
                <button type="submit" className="submit-btn">Login to your account</button>
                <div className="register-msg">
                    Not registered? <Link to="" className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                </div>
            </form>
            <div className='divider text-gray-400'>or</div>
            {/* optional authentication methods*/}
            <div>
                {/* <button type="button" className="optionalAuth">
                    <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z">
                        </path>
                    </svg>
                    Sign in with Facebook
                </button> */}
                <button type="button" className="optionalAuth" onClick={() => handleGoogleSignIn(new GoogleAuthProvider())}>
                    <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                        <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
                        </path>
                    </svg>
                    Sign in with Google
                </button>
            </div>
            <AuthDetails />
        </div >
    );
};

export default Sign;