module.exports = {
  // presets: ['@babel/preset-react', 'jest'],
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.json', '.svg', '.png'],
        // Note: you do not need to provide aliases for same-name paths immediately under /src/
        alias: {
          components: './src/components',
          // constantss: './src/constants',
        }
      }
    ],
    ["react-native-reanimated/plugin", {
      "relativeSourceLocation": true
    }]
  ]
}
