// Graph.js
import React from 'react';
import ReactFlow, { Background, Controls, MiniMap , Panel} from 'reactflow';
import StartNode from './types/StartNode';
import HelloNode from './types/HelloNode';

import { CheckNode, TransferNode, EndNode, ReminderNode, CommentNode,StateNode } from './types/index';

const nodeTypes = {
  // start: (props) => <StartNode {...props} additionalProp="valueForStart" />,
  // hello: (props) => <HelloNode {...props} additionalProp="valueForHello" />,
  // check: (props) => <CheckNode {...props} additionalProp="valueForCheck" />,
  // state: (props) => <StateNode {...props} additionalProp="valueForState" />,
  // transfer: (props) => <TransferNode {...props} additionalProp="valueForTransfer" />,
  // end: (props) => <EndNode {...props} additionalProp="valueForEnd" />,
  // reminder: (props) => <ReminderNode {...props} additionalProp="valueForReminder" />,
  // comment: (props) => <CommentNode {...props} additionalProp="valueForComment" />,
};


const Graph = ({ nodes, edges, onNodesChange, onEdgesChange }) => (
  <div style={{ width: '100%', height: '100vh' }}>
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
      // nodeTypes={nodeTypes}
    >
      <Controls />
      <MiniMap />
      <Background variant="dots" gap={12} size={1} />
      <Panel position="top-left">top-left</Panel>
    </ReactFlow>
  </div>
);

export default Graph;
