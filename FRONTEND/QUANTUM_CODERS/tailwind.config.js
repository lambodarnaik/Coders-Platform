/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  screens: {
    sm: '200px',
    md: '950px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    ms: '500px', // Example of a custom breakpoint
  },
  extend: {
    colors: {
      primary: '#1A202C',
      secondary: '#2D3748',
      accent: '#F6E05E',
      background: '#EDF2F7',
      text: '#2D3748',
      // blue:'#725ac1'
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      heading: ['Poppins', 'sans-serif'],
    },
  },
};
export const plugins = [];
