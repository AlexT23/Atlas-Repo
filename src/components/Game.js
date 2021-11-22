import React, { useState, useEffect } from 'react';
import {GameGrid} from './GameGrid'
import {ResetButton} from './ResetButton'
import styles from './TicTacToe.css';

const Game = () => {

    return (
        <>
            <GameGrid />
            <ResetButton />
        </>
    );
};

export default Game;

