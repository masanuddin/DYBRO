// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: [
//       ["babel-preset-expo", { jsxImportSource: "nativewind" }],
//       "nativewind/babel",
//     ],
//   };
// };

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // 1. Add any other plugins here
      // 2. Add Worklets plugin (important for Reanimated 4)
      "react-native-worklets/plugin",
      // 3. Reanimated MUST be last
      "react-native-reanimated/plugin",
    ],
  };
};
