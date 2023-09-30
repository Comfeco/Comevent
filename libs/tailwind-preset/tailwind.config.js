module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8C44CC',
          light: {
            1: '#A76EDD',
            2: '#F0E1FF',
          },
          dark: '#6B23A0',
          darkMode: '#B76AFF',
        },
        secondary: {
          DEFAULT: '#25D76B',
          light: {
            1: '#4EE88A',
            2: '#C4F7D8',
          },
          dark: '#00B54A',
          darkMode: '#4EE88A',
        },
        accent: {
          DEFAULT: '#FFC107',
          light: '#FFD540',
          dark: '#E6A000',
          darkMode: '#FFDA77',
        },
        white: {
          1: '#FFFFFF',
          2: '#F9F9F9',
        },
        black: {
          1: '#2E2E2E',
          2: '#20223A',
        },
        success: {
          DEFAULT: '#25D76B',
          light: {
            1: '#4EE88A',
            2: '#C4F7D8',
          },
          darkMode: '#60E494',
        },
        error: {
          DEFAULT: '#FF6B6B',
          light: '#FFDDDD',
          darkMode: '#FF6B6B',
        },
        warning: {
          DEFAULT: '#FF8964',
          light: '#FFCABA',
          darkMode: '#FF8964',
        },
        gray: {
          1: '#E3E3E3',
          2: '#C4C4C4',
          3: '#777879',
          4: '#555555',
        },
      },
    },
    boxShadow: {
      'nutral-level1': '0 2px 4px rgba(0, 0, 0, 0.10)',
      'nutral-level2': '0 4px 8px rgba(0, 0, 0, 0.10)',
      'nutral-level3': '0 10px 18px rgba(0, 0, 0, 0.10)',
      'nutral-level4': '0 12px 24px rgba(0, 0, 0, 0.10)',
      'material-level1': '0 2px 4px rgba(140, 68, 204, 0.30)',
    },
    fontFamily: {
      title: ['Montserrat', 'sans-serif'],
      body: ['Lato', 'sans'],
    },
    fontSize: {
      // Titles
      'title-1': '36px',
      'title-2': '30px',
      'title-3': '24px',
      'title-4': '20px',
      'title-5': '18px',
      'title-6': '16px',

      // Body text
      'body-1': '18px',
      'body-2': '16px',
      'body-3': '14px',
      'body-4': '12px',
    },
  },
  plugins: [],
};
