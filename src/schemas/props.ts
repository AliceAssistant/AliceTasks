import { PropsWithChildren } from 'react';
import { ViewStyle } from 'react-native';

export type BaseProps<P = unknown> = P &
  PropsWithChildren<P> & { style?: ViewStyle | ViewStyle[] };
