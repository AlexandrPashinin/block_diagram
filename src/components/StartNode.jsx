// HelloNode.js
import React, { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

const HelloNode = ({ data, isConnectable }) => {

  const onChange = useCallback((evt) => {

  }, []);

  return (
    <div  className="border border-success p-3 rounded">

      <h4>Привет</h4>
      <p>{data.label}</p>

      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />


    </div>
  );
};

export default HelloNode;
