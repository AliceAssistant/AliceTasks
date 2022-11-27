import React, { useMemo } from 'react';
import { GestureResponderEvent, Pressable, ViewStyle } from 'react-native';
import useTheme from '../../../hooks/useTheme';
import { BaseProps } from '../../../schemas/props';
import style from './style';

export interface RoundButtonProps extends BaseProps {
  onPress?: (event: GestureResponderEvent) => any;
}

export function RoundButton(props: RoundButtonProps) {
  const { theme } = useTheme();
  const themeStyle = useMemo(
    () => ({ backgroundColor: theme.colors.primary } as ViewStyle),
    [theme],
  );
  return (
    <Pressable
      onPress={props.onPress}
      style={[themeStyle, style.button, props.style]}>
      {props.children}
    </Pressable>
  );
}
