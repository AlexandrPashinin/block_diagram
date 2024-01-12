// Graph.js
import React from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import StartNode from '../StartNode';
import HelloNode from '../HelloNode';


const nodeTypes = {
  start: (props) => <StartNode {...props} additionalProp='valueForStart' />,
  hello: (props) => <HelloNode {...props} additionalProp='valueForHello' />,
};


const Graph = ({ nodes, edges, onNodesChange, onEdgesChange }) => (
  <div style={{ width: '100%', height: '100vh' }}>
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
      nodeTypes={nodeTypes}
    >
      <Controls />
      <MiniMap />
      <Background variant='dots' gap={12} size={1} />
    </ReactFlow>
  </div>
);

export default Graph;
