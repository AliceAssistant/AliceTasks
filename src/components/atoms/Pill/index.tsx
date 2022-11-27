import React, { useMemo } from 'react';
import { TextStyle, View, ViewStyle } from 'react-native';
import useTheme from '../../../hooks/useTheme';
import { BaseProps } from '../../../schemas/props';
import { Label } from '../Label';
import style from './style';

export interface PillProps {
  textStyle?: TextStyle;
}

export function Pill(props: BaseProps<PillProps>) {
  const { theme } = useTheme();
  const themeStyle = useMemo(
    () => ({ backgroundColor: theme.colors.secondary } as ViewStyle),
    [theme.colors.secondary],
  );

  return (
    <View style={[themeStyle, style.pill, props.style]}>
      <Label style={props.textStyle}>{props.children}</Label>
    </View>
  );
}
