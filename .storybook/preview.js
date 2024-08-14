import React from 'react';
import { ConfigProvider } from 'antd';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    source: {
      state: 'open',
    },
  },
  design: {
    type: 'figma',
  },
};

export const decorators = [
  (Story) => (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0388A6',
          colorLink: 'blue',
          colorSuccess: 'skyblue',
          colorWarning: 'darkred',
          colorError: 'red',
          colorBgLayout: '#EBF9FF',
        },
      }}
    >
      <div className='wrap'>
        <Story />
      </div>
    </ConfigProvider>
  ),
];
export const tags = ['autodocs'];