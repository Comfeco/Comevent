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
          DEFAULT: '#FA4A86',
          light: {
            1: '#FF6C9E',
            2: '#FEC5D8',
          },
          dark: '#C91250',
          darkMode: '#FF9BBD',
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
          0: '#F3F3F3',
          1: '#E3E3E3',
          2: '#C4C4C4',
          3: '#777879',
          4: '#555555',
        },
      },
    },
    boxShadow: {
      'neutral-level1': '0 2px 4px rgba(0, 0, 0, 0.10)',
      'neutral-level2': '0 4px 8px rgba(0, 0, 0, 0.10)',
      'neutral-level3': '0 10px 18px rgba(0, 0, 0, 0.10)',
      'neutral-level4': '0 12px 24px rgba(0, 0, 0, 0.10)',
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
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.title-h1': {
          '@apply text-title-1 font-bold font-title': {},
        },

        '.title-h2': {
          '@apply text-title-2 font-semibold font-title': {},
        },

        '.title-h3': {
          '@apply text-title-3 font-semibold font-title': {},
        },

        '.title-h4': {
          '@apply text-title-4 font-semibold font-title': {},
        },

        '.title-h5': {
          '@apply text-title-5 font-semibold font-title': {},
        },

        '.title-h6': {
          '@apply text-title-6 font-semibold font-title': {},
        },

        '.body-bigger': {
          '@apply text-body-1 font-normal font-body': {},
        },

        '.body-medium': {
          '@apply text-body-2 font-normal font-body': {},
        },

        '.body-medium-accent': {
          '@apply text-body-2 font-bold font-body': {},
        },

        '.body-small': {
          '@apply text-body-3 font-normal font-body': {},
        },

        '.body-smaller': {
          '@apply text-body-4 font-normal font-body': {},
        },
      });
    },
  ],
};
