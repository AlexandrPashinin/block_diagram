// nodes-edges.js
export const initialNodes = [
  {
    id: '1',
    type: 'input', // можно использовать различные типы узлов в зависимости от вашей конфигурации
    data: { label: 'Узел 1' },
    position: { x: 250, y: 5 },
  },
  {
    id: '2',
    data: { label: 'Узел 2' },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    data: { label: 'Узел 3' },
    position: { x: 400, y: 100 },
  },
];

export const initialEdges = [
  { id: '1-2',
    source: '1',
    target: '2',
    animated: true },
  { id: 'c1-2', source: '1', target: '3' , animated: true },
];