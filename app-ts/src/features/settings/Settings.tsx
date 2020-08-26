import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  setGameMode,
  setGameRegion,
  selectGameMode,
  selectGameRegion,
  selectAvailableGameModes,
  selectAvailableGameRegions,
} from './settingsSlice';
import { GameMode, GameRegion } from '../../types';


export function Settings() {
  const availableGameModes = useSelector(selectAvailableGameModes);
  const availableGameRegions = useSelector(selectAvailableGameRegions);
  const gameMode = useSelector(selectGameMode);
  const gameRegion = useSelector(selectGameRegion);
  const dispatch = useDispatch();

  const handleGameModeChange = (event: any, newModeId: string) => {
    if (newModeId !== null) {
      const newGameMode = availableGameModes.find((e: GameMode) => e.id === newModeId);
      if(newGameMode) {
        dispatch(setGameMode(newGameMode));
      }      
    }
  }
  const handleGameRegionChange = (event: any, newValue: GameRegion | undefined) => {
    if(!newValue) return;
    dispatch(setGameRegion(newValue));
  }

  return (
    <div>
      <ToggleButtonGroup
        value={gameMode.id}
        exclusive
        onChange={handleGameModeChange}
        aria-label="game mode"
      >
        {availableGameModes.map((e: { id: string, name: string; }) => (
          <ToggleButton key={e.id} value={e.id} aria-label={e.name}>
            {e.name}
          </ToggleButton>
        ))}

      </ToggleButtonGroup>


      <Autocomplete
        value={gameRegion}
        disableClearable={ true }
        options={availableGameRegions}
        onChange={handleGameRegionChange}
        getOptionLabel={(option) => option.name}
        getOptionSelected={(option, value) => option.name === value.name}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Select the Game Region" variant="outlined" />}
      />

    </div>
  );
}
