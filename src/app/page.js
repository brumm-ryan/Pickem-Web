'use client'
import React, { useEffect } from 'react';
import {onAuthStateChanged} from "firebase/auth";
import { auth } from '../firebase/firebase';
import {useRouter} from "next/navigation";
import Home from "@/componenets/home";
import {UserProvider, useUser} from "@/context/UserContext";

const Landing = () => {
    const router = useRouter();
    const { userInfo, updateUserInfo } = useUser();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('user logged in');
            } else {
                console.log("user is signed out");
                router.push("/sign-in");
            }
        });
    }, []);

    return (
        <main>
            <UserProvider>
                <Home></Home>
            </UserProvider>
        </main>
    )
}

export default Landing
