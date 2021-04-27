// .babelrc.js
module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
    ],
  ],
  plugins: [
    '@emotion/babel-plugin',
    'babel-plugin-macros',
    'inline-react-svg',
    [
      'module-resolver',
      {
        alias: {
          '@/components': './components',
          '@/assets': './assets',
        },
      },
    ],
  ],
};
