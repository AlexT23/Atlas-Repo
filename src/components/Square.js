import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import styles from './TicTacToe.css';

export const Square = (props) => {
    
    return (
        <Grid item
              justifyContent={'center'}
              onClick={() => props.onClick()} >
            <Typography variant={'h4'} >
                {props.value}
            </Typography>
        </Grid>
    );
}
