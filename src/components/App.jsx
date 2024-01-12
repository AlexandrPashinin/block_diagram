
// App.js
import React from 'react';

import { ReactFlowProvider } from 'reactflow';
import LayoutFlowComponent from './LayoutFlowComponent';
import { Content } from 'next/dist/compiled/@next/font/dist/google';

const App = () => (
  <ReactFlowProvider>
    <LayoutFlowComponent />
  </ReactFlowProvider>
);

export default App;