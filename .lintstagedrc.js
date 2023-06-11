module.exports = {
  // Lint & Prettify TS and JS files
  '**/*.(jsx|js)': (filenames) => [
    `yarn eslint ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // Prettify
  '**/*.(md|json|scss|css)': (filenames) => `yarn prettier --write ${filenames.join(' ')}`,
};
