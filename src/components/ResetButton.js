import React, { useState, useEffect } from 'react';
import {Grid, Button, Typography} from '@material-ui/core';
import styles from './TicTacToe.css';

export const ResetButton = () => {

    const handleReset = () => {
        let gridItems = document.getElementsByClassName('MuiGrid-item');

        for (let item of gridItems) {
            item.firstChild.innerText = "";
        };
    }
    
    return (
        <Grid container className={styles.gridItem}
              onClick={handleReset}
              justifyContent={"center"} >
            <Button variant={"contained"}
                    style={{color: '#5ab63b'}} >
                Reset
            </Button>
        </Grid>
    );
}
