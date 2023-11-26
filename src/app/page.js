'use client'
import React, { useState, useEffect } from 'react';
import {onAuthStateChanged} from "firebase/auth";
import { auth } from '../firebase/firebase';
import {useRouter} from "next/navigation";
import {useUser} from "@/context/UserContext";

const Landing = () => {

    const router = useRouter();
    const { user, updateUser } = useUser();
    const [token, setToken] = useState({});

    useEffect(() => {
        localStorage.setItem('token', JSON.stringify(token));
    }, [token]);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            setToken(token);
        }
    }, []);

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                updateUser(user);
                user.getIdToken().then(token => setToken(token));
                console.log("uid", uid);
            } else {
                console.log("user is signed out");
                updateUser({});
                setToken(null);
                router.push("/sign-in");
            }
        });

    }, []);

    return (
        <div></div>
    )
}

export default Landing
