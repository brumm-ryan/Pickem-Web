'use client'
import React, { useState, useEffect } from 'react';
import {onAuthStateChanged} from "firebase/auth";
import { auth } from '../firebase/firebase';
import {useRouter} from "next/navigation";
import {createTheme, ThemeProvider} from "@mui/material";
import HomePage from "@/componenets/home";

const Home = () => {

    const router = useRouter();
    const defaultTheme = createTheme();
    const [user, setUser] = useState({});
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
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                setUser(user);
                // ...
                user.getIdToken().then(token => setToken(token));
                console.log("uid", uid);
            } else {
                // User is signed out
                // ...
                console.log("user is logged out");
                setUser({});
                setToken(null);
                router.push("/login");
            }
        });

    }, []);

    return (
        <ThemeProvider theme={defaultTheme}>
            <HomePage user={user}></HomePage>
        </ThemeProvider>
    )
}

export default Home
