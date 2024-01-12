import React from 'react';

// Это примеры. Вы должны определить реальный JSX для каждого компонента.

export const CheckNode = ({ data, additionalProp }) => (
  <div className="custom-node check-node">
    <p>Проверка: {additionalProp}</p>
    <p>{data.label}</p>
  </div>
);

export const StateNode = ({ data, additionalProp }) => (
  <div className="custom-node state-node">
    <p>Состояние: {additionalProp}</p>
    <p>{data.label}</p>
  </div>
);

export const TransferNode = ({ data, additionalProp }) => (
  <div className="custom-node transfer-node">
    <p>Передача: {additionalProp}</p>
    <p>{data.label}</p>
  </div>
);

export const EndNode = ({ data, additionalProp }) => (
  <div className="custom-node end-node">
    <p>Конец: {additionalProp}</p>
    <p>{data.label}</p>
  </div>
);

export const ReminderNode = ({ data, additionalProp }) => (
  <div className="custom-node reminder-node">
    <p>Напоминание: {additionalProp}</p>
    <p>{data.label}</p>
  </div>
);

export const CommentNode = ({ data, additionalProp }) => (
  <div className="custom-node comment-node">
    <p>Комментарий: {additionalProp}</p>
    <p>{data.label}</p>
  </div>
);
