"use client"
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {getHeaders} from "@/appUtils";
import {default as axios} from "axios";
import nextConfig from "../../next.config";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import List from "@mui/material/List";
import GameCard from "@/componenets/gameCard";


export const TeamOverview = (props) => {
    const router = useRouter();
    const team = props.team
    const [games, setGames] = useState([]);
    const [picks, setPicks] = useState([]);

    const getGames = async () => {
        const headers = await getHeaders();
        return axios.get(`${nextConfig.env.API_URL}/games?sport=${team?.League?.Season?.sport}&week=${team?.League?.Season?.week}`, headers);
    }

    const getPicks = async () => {
        const headers = await getHeaders();
        return axios.get(`${nextConfig.env.API_URL}/teams/${team?.id}/picks`, headers);
    }

    useEffect(() => {
        getGames()
            .then((gamesResponse) => {
                console.log(gamesResponse.data);
                setGames(gamesResponse.data);
            })
            .catch((error) => {
                console.error(error);
            });
        getPicks()
            .then((picksResponse) => {
                console.log(picksResponse.data);
                setPicks(picksResponse.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return(
        <div style={{paddingTop: '50px'}}>
            <h1>Week {team?.League?.Season?.week}</h1>
            <List>
                {games?.map((game) => (
                    <ListItem key={game?.id} disablePadding>
                        <GameCard team={team} game={game}></GameCard>
                    </ListItem>
                ))}
            </List>
        </div>)
}

export default TeamOverview