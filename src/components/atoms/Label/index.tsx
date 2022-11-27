import React, { useMemo } from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import useTheme from '../../../hooks/useTheme';

export function Label(props: TextProps) {
  const { theme } = useTheme();
  const themeStyle = useMemo(
    () => ({ color: theme.colors.text } as TextStyle),
    [theme],
  );
  return <Text style={[themeStyle, props.style]}>{props.children}</Text>;
}
