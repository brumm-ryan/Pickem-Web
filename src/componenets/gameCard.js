import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {Button} from "@mui/material";

export default function GameCard(props) {
    const theme = useTheme();
    const game = props?.game;
    const team = props?.team;
    const pick = props?.pick;

    return (
        <div style={{alignItems:"self-start", border:"thin"}}>
            <Button>{game?.awayTeam}</Button>
            <h3>@</h3>
            <Button>{game?.homeTeam}</Button>
            <h4>Kick-Off: {game?.startTime}</h4>
        </div>
    );
}