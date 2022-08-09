import { Alert, Spin } from 'antd';
import React from 'react';

const Loader = () => (
  <Spin tip="Loading..." delay={0} size='large'>
  </Spin>
);

export default Loader;