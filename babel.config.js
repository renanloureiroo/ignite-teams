module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "babel-plugin-styled-components",
      [
        "module-resolver",
        {
          root: ["./app"],
          alias: {
            "@components": "./app/components",
            "@routes": "./app/routes",
            "@shared": "./app/shared",
            "@screens": "./app/screens",
            "@theme": "./app/shared/theme",
            "@assets": "./app/assets",
          },
        },
      ],
    ],
  };
};
