import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setGameMode,
  selectAvailableGameModes
} from './settingsSlice';


export function Settings() {
  const availableGameModes = useSelector(selectAvailableGameModes);
  const dispatch = useDispatch();


  return (
    <div>
      {availableGameModes.map(e => (
        e.name
      ))}
    </div>
  );
}
