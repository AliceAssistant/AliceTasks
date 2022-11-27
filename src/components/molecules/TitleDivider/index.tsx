import React from 'react';
import { BaseProps } from '../../../schemas/props';
import { Label } from '../../atoms/Label';
import style from './style';

export function TitleDivider(props: BaseProps<{ title: string }>) {
  return <Label style={[style.title, props.style]}>{props.title}</Label>;
}
