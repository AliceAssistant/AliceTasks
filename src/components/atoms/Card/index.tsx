import React, { useMemo } from 'react';
import { View, ViewStyle } from 'react-native';
import useTheme from '../../../hooks/useTheme';
import { BaseProps } from '../../../schemas/props';
import styles from './sytle';

export function Card(props: BaseProps) {
  const { theme } = useTheme();
  const themeStyle = useMemo(
    () => ({ borderColor: theme.colors.border } as ViewStyle),
    [theme],
  );
  return (
    <View style={[styles.card, themeStyle, props.style]}>{props.children}</View>
  );
}
