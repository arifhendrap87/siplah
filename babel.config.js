module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@components': './app/components',
          '@screen': './app/screen',
          '@screenFront': './app/screen/front',
          '@screenAkun': './app/screen/akun',
          '@navigation': './app/navigation',
          '@config': './app/config',
          '@assets': './app/assets',
        },
      },
    ],
  ],
};