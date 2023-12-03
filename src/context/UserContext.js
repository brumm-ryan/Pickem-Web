"use client"
import React, {createContext, useState, useContext, useEffect} from 'react';
import {auth} from "@/firebase/firebase";
import {getHeaders} from "@/appUtils";
import {default as axios} from "axios";
import nextConfig from "../../next.config";
import {useRouter} from "next/navigation";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [teams, setTeams] = useState([]);
    const router = useRouter();

    const updateUserInfo = (info) => {
        console.log(info);
        setUserInfo(info);
    };

    const updateTeams = (teams) => {
        console.log(teams);
        setTeams(teams)
    };

    useEffect(() => {
        const getSignedInUserData = async () => {
            await auth.authStateReady()
            const externalId = auth.currentUser?.uid
            if (!externalId){
                updateUserInfo(null);
                router.push('/sign-in')
            } else {
                console.log(externalId);
                const headers = await getHeaders();
                console.log('headers: ');
                console.log(headers);
                return axios.get(`${nextConfig.env.API_URL}/users/${externalId}/expand`, headers);
            }
        }

        getSignedInUserData()
            .then((userInfoData) => {
                updateUserInfo(userInfoData.data);
                updateTeams(userInfoData.data?.Teams);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <UserContext.Provider value={{ userInfo, updateUserInfo, teams, updateTeams }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
