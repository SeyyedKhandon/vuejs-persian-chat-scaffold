module.exports = {
  stories: ["../../stories/**/*.stories.(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-actions",
    {
      name: "@storybook/addon-docs",
      options: {
        babelOptions: {
          presets: [
            [
              "@vue/cli-plugin-babel/preset",
              {
                jsx: false
              }
            ]
          ]
        }
      }
    },
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-notes"
  ]
};
