import React from 'react';
import { ConfigProvider } from 'antd';
import styled, { ThemeProvider } from 'styled-components';

const StyledWrapper = styled.div`
  .ant-input-status-success {
    border-color: ${props => props.theme.token.colorSuccess} !important;
  }
  .ant-input-status-success:hover,
  .ant-input-status-success:focus {
    border-color: ${props => props.theme.token.colorSuccess} !important;
    box-shadow: 0 0 0 2px rgba(38, 152, 189, 0.2) !important;
  }
`;

export const parameters = {
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

const theme = {
  token: {
    colorPrimary: '#0388A6',
    colorLink: 'blue',
    colorSuccess: '#2698BD',
    colorWarning: '#faad14',
    colorError: 'red',
    colorBgLayout: '#EBF9FF',
  },
  components: {
    Input: {
      colorSuccessBorder: '#2698BD',
      colorSuccessBg: '#f6ffed',
      colorSuccessOutline: 'rgba(38, 152, 189, 0.2)',
    },
  },
};

export const decorators = [
  (Story) => (
    <ConfigProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <StyledWrapper>
          <div className='wrap'>
            <Story />
          </div>
        </StyledWrapper>
      </ThemeProvider>
    </ConfigProvider>
  ),
];

export const tags = ['autodocs'];