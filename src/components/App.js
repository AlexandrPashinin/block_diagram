
// App.js
import React from 'react';

import { ReactFlowProvider } from 'reactflow';
import LayoutFlowComponent from './LayoutFlowComponent';

const App = () => (
  <ReactFlowProvider>
    <LayoutFlowComponent />
  </ReactFlowProvider>
);

export default App;