import React, { useState, useEffect } from 'react';
import {Grid, Button, Typography} from '@material-ui/core';
import {Square} from './Square';
import {GameGrid} from './GameGrid'
import styles from './TicTacToe.css';

const Game = () => {

    const handleReset = () => {
        //TODO clear game grid
    }

    return (
        <>
            <GameGrid />
            <Grid container className={styles.gridItem}
                  justifyContent={"center"} >
                <Button variant={"contained"}
                        style={{color: '#5ab63b'}} >
                    Reset
                </Button>
            </Grid>
        </>
    );
};

export default Game;

