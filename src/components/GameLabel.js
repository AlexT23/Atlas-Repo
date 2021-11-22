import React from 'react';
import {Grid, Button, Typography} from '@material-ui/core';
import styles from './TicTacToe.css';

export const GameLabel = (nextplayer) => {

    return (
        <Grid container 
            justifyContent={'center'}>
            <Typography variant={'h4'} >
                Next turn: {nextplayer.nextplayer}
            </Typography>
        </Grid>
    );
}
