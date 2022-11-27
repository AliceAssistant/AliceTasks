import React from 'react';
import { SafeAreaView } from 'react-native';
import { BaseProps } from '../../../schemas/props';
import styles from './style';

export function SafeAreaWrapperComponent(props: BaseProps) {
  return (
    <SafeAreaView style={[styles.wrapper, props.style]}>
      {props.children}
    </SafeAreaView>
  );
}

export const SafeAreaWrapper = React.memo(SafeAreaWrapperComponent);
