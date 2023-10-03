const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const sharedTailwindConfig = require('../../libs/tailwind-preset/tailwind.config');

module.exports = {
  presets: [sharedTailwindConfig],
  content: [
    join(__dirname, '**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.title-h1': {
          '@apply text-title-1 font-bold font-title text-black-1': {},
        },

        '.title-h2': {
          '@apply text-title-2 font-semibold font-title text-black-1': {},
        },

        '.title-h3': {
          '@apply text-title-3 font-semibold font-title text-black-1': {},
        },

        '.title-h4': {
          '@apply text-title-4 font-semibold font-title text-black-1': {},
        },

        '.title-h5': {
          '@apply text-title-5 font-semibold font-title text-black-1': {},
        },

        '.title-h6': {
          '@apply text-title-6 font-semibold font-title text-black-1': {},
        },

        '.body-bigger': {
          '@apply text-body-1 font-normal font-body text-black-1': {},
        },

        '.body-medium': {
          '@apply text-body-2 font-normal font-body text-black-1': {},
        },

        '.body-medium-accent': {
          '@apply text-body-2 font-bold font-body text-black-1': {},
        },

        '.body-small': {
          '@apply text-body-3 font-normal font-body text-black-1': {},
        },

        '.body-smaller': {
          '@apply text-body-4 font-normal font-body text-black-1': {},
        },
      });
    },
  ],
};
