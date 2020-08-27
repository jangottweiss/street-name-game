import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

import { Game } from '../../types/index'


const initialState: Game = {
    state: 'STOPPED',
    currentRound: null,
    previousRounds: [],
    nextRounds: [],
};

export const gameSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        loadGame: (state) => {
            state.state = 'LOADING'
        },
        startGame: (state) => {
            state.state = 'RUNNING'
        },
        stopGame: (state) => {
            state.state = 'STOPPED'
        },
        
    },
});

export const { loadGame, startGame, stopGame} = gameSlice.actions;

export const selectGameState = (state: RootState) => state.game.state;


export default gameSlice.reducer;
