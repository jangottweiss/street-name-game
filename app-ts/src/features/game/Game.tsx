import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '@material-ui/core';

import {
    startGame,
    loadGame,
    stopGame,
    selectGameState,
} from './gameSlice';

import { Map } from './Map';

export function Game() {
    const dispatch = useDispatch();
    const gameState = useSelector(selectGameState);

    const onStartGame = () => {
        dispatch(loadGame());
        // Load the Streets        
        dispatch(startGame())
    };

    const onStopGame = () => {
        dispatch(stopGame())
    };

    return (
        <div>
            {gameState === 'STOPPED' &&
                <Button
                    onClick={onStartGame} >Start Game
                </Button>
            }
            {gameState === 'LOADING' &&
                <div>Loading</div>
            }
            {gameState === 'RUNNING' &&
                <Button
                    onClick={onStopGame}
                >Stop Game</Button>
            }

            <Map></Map>
        </div>
    );
}
