import React from 'react';
import { Handle, Position } from 'reactflow';
// Это примеры. Вы должны определить реальный JSX для каждого компонента.

export const CheckNode = ({ data, additionalProp , isConnectable }) => (
    <div className="border border-success p-3 roundedcheck-node">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <p>Проверка: {additionalProp}</p>
      <p>{data.label}</p>
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
    </div>
  )
;

export const StateNode = ({ data, additionalProp , isConnectable }) => (
  <div className="border border-success p-3 rounded state-node">
    <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
    <p>Состояние: {additionalProp}</p>
    <p>{data.label}</p>
    <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
  </div>
);

export const TransferNode = ({ data, additionalProp, isConnectable }) => (
  <div className="border border-success p-3 roundedtransfer-node">
    <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
    <p>Передача: {additionalProp}</p>
    <p>{data.label}</p>
    <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
  </div>
);

export const EndNode = ({ data, additionalProp, isConnectable }) => (
  <div className="border border-success p-3 roundedend-node">
    <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
    <p>Конец: {additionalProp}</p>
    <p>{data.label}</p>
    <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />

  </div>
);

export const ReminderNode = ({ data, additionalProp, isConnectable }) => (
  <div className="border border-success p-3 roundedreminder-node">
    <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
    <p>Напоминание: {additionalProp}</p>
    <p>{data.label}</p>
    <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
  </div>
);

export const CommentNode = ({ data, additionalProp, isConnectable }) => (
  <div className="border border-success p-3 roundedcomment-node">
    <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
    <p>Комментарий: {additionalProp}</p>
    <p>{data.label}</p>
    <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
  </div>
);
