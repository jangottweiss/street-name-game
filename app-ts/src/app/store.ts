import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import settingsReducer from '../features/settings/settingsSlice';
import gameReducer from '../features/game/gameSlice';

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
