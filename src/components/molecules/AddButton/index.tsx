import React from 'react';
import { RoundButton, RoundButtonProps } from '../../atoms/RoundButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from './style';
import { ViewStyle } from 'react-native';
import useTheme from '../../../hooks/useTheme';

export function AddButton(props: RoundButtonProps) {
  const { theme } = useTheme();

  return (
    <RoundButton
      style={[style.button, props.style as ViewStyle]}
      onPress={props.onPress}>
      <Icon name="add" size={50} color={theme.colors.text} />
    </RoundButton>
  );
}
