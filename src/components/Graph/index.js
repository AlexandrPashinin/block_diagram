// Graph.js
import React from 'react';
import ReactFlow, { Background, Controls, MiniMap , Panel} from 'reactflow';
import StartNode from './types/StartNode';
import HelloNode from './types/HelloNode';

import { CheckNode, TransferNode, EndNode, ReminderNode, CommentNode,StateNode } from './types/index';



const Graph = ({ nodes, edges, onNodeClick, onNodesChange, onEdgesChange, isCardOpen , toggleCard }) => (
  <div style={{ width: '100%', height: '100vh' ,display: 'flex' }}>
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
      onNodeClick={onNodeClick}
      // nodeTypes={nodeTypes}
    >
      <Controls />
      <MiniMap />
      <Background variant="dots" gap={12} size={1} />
      <Panel position="top-left">top-left</Panel>
    </ReactFlow>
    {!isCardOpen &&
    <Panel position="top-right" style={{ height: '80%', display: 'flex', flexDirection: 'column-reverse', alignItems: 'center' }}>
      <div onClick={toggleCard} style={{ height: '80%', cursor: 'pointer', display: 'flex', borderRadius: '40px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', writingMode: 'vertical-rl', backgroundColor: '#f0f0f0'}}
      >
        открыть карточку
      </div>
    </Panel>
    }
  </div>
);

export default Graph;
