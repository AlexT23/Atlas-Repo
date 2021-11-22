import React, { useState, useEffect } from 'react';
import {Grid, Button, Typography} from '@material-ui/core';
import {Square} from './Square';
import styles from './TicTacToe.css';

export const GameGrid = () => {

    function handleClick (i) {
        //TODO handle inserting X and O
    };

    return (
        <>
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
