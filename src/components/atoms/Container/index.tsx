import React, { useMemo } from 'react';
import { View, ViewStyle } from 'react-native';
import useTheme from '../../../hooks/useTheme';
import { BaseProps } from '../../../schemas/props';
import style from './style';

export interface ContainerProps {
  flex?: boolean;
  transparent?: boolean;
}

export function Container(props: BaseProps<ContainerProps>) {
  const { theme } = useTheme();
  const extraStyle = useMemo(
    () =>
      ({
        flex: props.flex ? 1 : 0,
        backgroundColor: props.transparent ? 'transparent' : theme.colors.bg,
      } as ViewStyle),
    [props.flex, props.transparent, theme],
  );

  return (
    <View style={[extraStyle, style.container, props.style]}>
      {props.children}
    </View>
  );
}

Container.defaultProps = {
  flex: false,
  transparent: false,
};
