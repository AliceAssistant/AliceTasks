import React from 'react';
import { View, ViewStyle } from 'react-native';
import { Task } from '../../../schemas/task';
import { Card } from '../../atoms/Card';
import { Label } from '../../atoms/Label';
import { Pill } from '../../atoms/Pill';
import style from './style';

export interface TaskCardProps {
  task: Task;
  sytle: ViewStyle;
}

export function TaskCard(props: TaskCardProps) {
  return (
    <Card style={[style.card, props.sytle]}>
      <View style={style.col}>
        <Label style={style.title}>{props.task.title}</Label>
        <Pill textStyle={style.pillText}>
          {props.task.datetime.toLocaleString()}
        </Pill>
      </View>
    </Card>
  );
}
