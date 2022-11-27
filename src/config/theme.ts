export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    terciary: string;
    text: string;
    bg: string;
    border: string;
  };
}

export const Themes = {
  dark: {
    colors: {
      primary: '#e594f7',
      secondary: '#2aa3a3',
      terciary: '#a32a5c',
      text: '#ffffff',
      bg: '#363636',
      border: '#d8bee8',
    },
  },
};
