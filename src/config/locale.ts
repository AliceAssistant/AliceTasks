import { setLocale } from 'yup';

setLocale({
  string: {
    matches: 'Formato de cadena incorrecto',
  },
  mixed: {
    required: 'Campo obligatorio',
  },
});
