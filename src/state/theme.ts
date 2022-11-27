import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '.';
import { Theme, Themes } from '../config/theme';

interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: Themes.dark,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const ThemeStateActions = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.theme;
export const ThemeReducer = themeSlice.reducer;
