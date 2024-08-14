import React from 'react';
import { Button } from 'antd';

export default {
  title: 'Ant Design/Button',
  component: Button,
};

export const Primary = () => <Button type="primary">Primary Button</Button>;
export const Default = () => <Button>Default Button</Button>;
export const Dashed = () => <Button type="dashed">Dashed Button</Button>;