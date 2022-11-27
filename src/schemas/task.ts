import * as yup from 'yup';

export const TaskSchema = yup.object({
  title: yup.string().required(),
  description: yup.string(),
  date: yup
    .string()
    .matches(/\d{4}-((0\d)|(1[012]))-(([012]\d)|(3[01]))/)
    .required(),
  time: yup
    .string()
    .matches(/(([01]\d)|2[0-3]):[0-5]\d/)
    .required(),
});

export type TaskInput = yup.Asserts<typeof TaskSchema>;

export interface Task extends yup.Asserts<typeof TaskSchema> {
  datetime: Date;
}

/**
 * Adds the date objecto to a serializable TaskInput
 *
 * @param input The Input to transform
 * */
export function taskInputToTask(input: TaskInput): Task {
  return {
    title: input.title,
    description: input.description,
    date: input.date,
    time: input.time,
    datetime: new Date(`${input.date}T${input.time}`),
  };
}
