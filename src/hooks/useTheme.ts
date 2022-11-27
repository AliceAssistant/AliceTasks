import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Theme } from '../config/theme';
import { useAppDispatch } from '../state';
import { selectTheme, ThemeStateActions } from '../state/theme';

export default function useTheme() {
  const theme = useSelector(selectTheme);
  const dispatch = useAppDispatch();

  const setTheme = useCallback(
    (newTheme: Theme) => {
      dispatch(ThemeStateActions.set(newTheme));
    },
    [dispatch],
  );

  return { theme, setTheme };
}
