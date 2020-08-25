import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

import { GameMode, GameRegion, SettingsState } from '../../types/index'


const initialState: SettingsState = {
    availableGameModes: [{
        id: 'guessName',
        name: 'Guess the Street Name',
    },
    {
        id: 'guessStreet',
        name: 'Guess the Street Location'
    }],
    availableRegions: [{
        id: 'neckarelz',
        name: 'Neckarelz',
    },
    {
        id: 'diedesheim',
        name: 'Diedesheim',
    },
    {
        id: 'mosbach',
        name: 'Mosbach',
    }],
    settings: {
        difficulty: 0,
        region: '',
        mode: '',
        rounds: 3,
    }
};

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setGameMode: (state, action: PayloadAction<GameMode>) => {
            state.settings.mode = action.payload.id;
        },
        setGameRegion: (state, action: PayloadAction<GameRegion>) => {
            state.settings.region = action.payload.id;
        },
        setNoRounds: (state, action: PayloadAction<number>) => {
            state.settings.rounds = action.payload;
        },
        setDifficulty: (state, action: PayloadAction<number>) => {
            state.settings.difficulty = action.payload;
        }
    },
});

export const { setGameMode, setGameRegion, setNoRounds, setDifficulty } = settingsSlice.actions;

export const selectAvailableGameModes = (state: RootState) => state.settings.availableGameModes;
export const selectAvailableGameRegions = (state: RootState) => state.settings.availableRegions;
export const selectGameSettings = (state: RootState) => state.settings.settings;

export default settingsSlice.reducer;
