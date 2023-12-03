"use client"
import React, {createContext, useState, useContext, useEffect} from 'react';
import {getHeaders} from "@/appUtils";
import {default as axios} from "axios";
import nextConfig from "../../next.config";
import {useRouter} from "next/navigation";

const GameContext = createContext({});

export const GameProvider = ({ children }) => {
    const [games, setGames] = useState([]);
    const router = useRouter();

    const updateGames = (games) => {
        console.log(games);
        setGames(games);
    };

    return (
        <GameContext.Provider value={{ games, updateGames }}>
            {children}
        </GameContext.Provider>
    );
};

export const useUser = () => {
    return useContext(GameContext);
};
