/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    '@storybook/addon-docs',
    '@storybook/addon-designs', // storybook에 design 속성 기능 제공 (figma 등 활용 가능)
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {},

  // 이 부분을 변경했습니다
  staticDirs: ['../public'],

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;