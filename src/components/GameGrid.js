import React, { useState, useEffect } from 'react';
import {Grid, Typography, Dialog, DialogTitle, DialogContent} from '@material-ui/core';
import {Square} from './Square';
import {GameLabel} from './GameLabel';
import styles from './TicTacToe.css';

export const GameGrid = () => {
    
    const [displayWinner, setDisplayWinner] = useState(false);
    const [winner, setWinner] = useState("");

    const calculateWinner = (squares) => {
        const rows = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < rows.length; i++) {
            const [a, b, c] = rows[i];
            const aValue = squares[a].firstChild.innerText;
            const bValue = squares[b].firstChild.innerText;
            const cValue = squares[c].firstChild.innerText;
            if (aValue && aValue === bValue && aValue === cValue) {
                return aValue;
            }
        }
        return null;
    }

    const [nextPlayer, setNextPlayer] = useState('X');

    function handleClick (i) {
        const squares = document.getElementsByClassName("MuiGrid-item");
        if (squares[i].firstChild.innerText === "")
            squares[i].firstChild.innerText = nextPlayer;
        let winner = calculateWinner(squares);
        if (winner) {
            setDisplayWinner(true);
            setWinner(winner);
            return;
        }
        nextPlayer === 'X' ? setNextPlayer('O') : setNextPlayer('X');
    };
    
    const winnerDialog = () => {
        return (
            <Dialog open={displayWinner}
                    onClose={() => setDisplayWinner(false)} 
                    maxWidth={'lg'}>
                <DialogTitle>
                    Match Results:
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={12}>
                        <Grid item xs={12} >
                            Player {winner} wins!
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <>
            {winnerDialog()}
            <GameLabel nextplayer={nextPlayer} />
            <Grid container
                  justifyContent={"center"}
                  className={styles.gridRow}>
                <Square onClick={() => handleClick(0)}/>
                <Square onClick={() => handleClick(1)}/>
                <Square onClick={() => handleClick(2)}/>
            </Grid>
            <Grid container
                  justifyContent={"center"}
                  className={styles.gridRow}>
                <Square onClick={() => handleClick(3)} />
                <Square onClick={() => handleClick(4)} />
                <Square onClick={() => handleClick(5)} />
            </Grid>
            <Grid container
                  justifyContent={"center"}
                  className={styles.gridRow}>
                <Square onClick={() => handleClick(6)} />
                <Square onClick={() => handleClick(7)} />
                <Square onClick={() => handleClick(8)} />
            </Grid>
        </>
    );
}
