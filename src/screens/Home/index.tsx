import React from 'react';
import { Container } from '../../components/atoms/Container';
import { AddButton } from '../../components/molecules/AddButton';
import { TaskCard } from '../../components/molecules/TaskCard';
import { TitleDivider } from '../../components/molecules/TitleDivider';

export function HomeScreen() {
  return (
    <Container flex>
      <TitleDivider title="Hoy" />
      <TaskCard task={{ title: 'Hacer examen', datetime: new Date() }} />
      <AddButton />
    </Container>
  );
}
