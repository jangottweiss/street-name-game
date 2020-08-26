import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

import { Game } from '../../types/index'


const initialState: Game = {
    state: 'STOPPED',
    currentRound: 0,
};

export const gameSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        startGame: (state) => {
            state.state = 'STARTED'
        },
        stopGame: (state) => {
            state.state = 'STOPPED'
        },
        
    },
});

export const { startGame, stopGame} = gameSlice.actions;



export default gameSlice.reducer;
