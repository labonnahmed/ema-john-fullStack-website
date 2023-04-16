import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import auth from '../authentication/firebase'
import { useLocation, useNavigate } from 'react-router-dom';

const AuthDetails = () => {
    const authUser = JSON.parse(sessionStorage.getItem('authUser')) || null;

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname;

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                sessionStorage.setItem('authUser', JSON.stringify(user));

                navigate(from, {replace:true})
            }
            else {
                sessionStorage.setItem('authUser', JSON.stringify(null));
            }
        });
        return () => {
            listen();
        }
    }, []);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                alert('sign out');
            })
            .catch((err) => {
                console.log(err.massage)
            });
            window.location.reload();
    };

    return (
        <div>
            {
                authUser && <button onClick={handleLogout} className="user-config">Log Out</button>
            }
        </div>
    );
};

export default AuthDetails;