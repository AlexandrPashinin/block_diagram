// nodes-edges.js
// export const initialNodes = [
//   {
//     id: '1',
//     type: 'input', // можно использовать различные типы узлов в зависимости от вашей конфигурации
//     data: {
//       label: 'Узел 1',
//       width: 150,
//       height: 60,
//     },
//     style: {
//       backgroundColor: 'red',
//       backgroundOpacity: 0.5,
//     },
//     position: { x: 250, y: 5 },
//   },
//   {
//     id: '2',
//     data: { label: 'Узел 2' },
//     position: { x: 100, y: 100 },
//   },
//   {
//     id: '3',
//     data: { label: 'Узел 3' },
//     position: { x: 400, y: 100 },
//   },
// ];
//
// export const initialEdges = [
//   {
//     id: '1-2',
//     source: '1',
//     target: '2',
//     animated: true,
//   },
//   { id: 'c1-2', source: '1', target: '3', animated: true },
// ];



const salesFunnelData = [
  {
    id: '1',
    type: 'stage',
    data: { label: 'Первичный контакт', width: 150, height: 60 },
    style: { backgroundColor: '#ffcc00', backgroundOpacity: 0.8 },
    edges: [{ id: '1-2', source: '1', target: '2', animated: true }],
    position: { x: 250, y: 5 },
  },
  {
    id: '2',
    type: 'stage',
    data: { label: 'Презентация продукта', width: 150, height: 60 },
    style: { backgroundColor: '#00ccff', backgroundOpacity: 0.8 },
    edges: [
      { id: '2-3', source: '2', target: '3', animated: true }],
    position: { x: 250, y: 100 },
  },
  {
    id: '3',
    type: 'stage',
    data: { label: 'Переговоры', width: 150, height: 60 },
    style: { backgroundColor: '#ccffcc', backgroundOpacity: 0.8 },
    // edge: { id: '3-4', source: '3', target: '4', animated: true },
    position: { x: 250, y: 200 },
  },
  {
    id: '5',
    type: 'stage',
    data: { label: 'сомнение клиента', width: 150, height: 60 },
    style: { backgroundColor: '#ff9', backgroundOpacity: 0.8 },
    position: { x: 400, y: 300 },
    edges: [{ id: '3-5', source: '3', target: '5', animated: true },],
    // Этот узел не имеет исходящих рёбер, так как это конечный этап воронки
  },
  {
    id: '6',
    type: 'stage',
    data: { label: 'презентация наилучшего для него исхода', width: 150, height: 60 },
    style: { backgroundColor: '#ff9', backgroundOpacity: 0.8 },
    position: { x: 100, y: 270 },
    edges: [
      { id: '3-6', source: '3', target: '6', animated: true },
      { id: '6-4', source: '6', target: '4', animated: true },
      { id: '5-4', source: '5', target: '4', animated: true },
    ]
  },
  {
    id: '4',
    type: 'stage',
    data: { label: 'Закрытие сделки', width: 150, height: 60 },
    style: { backgroundColor: '#ff9999', backgroundOpacity: 0.8 },
    position: { x: 250, y: 400 },

  },

];


// Создаем массив узлов, исключая информацию о рёбрах
export const initialNodes = salesFunnelData.map(({ edge, ...node }) => node);

// Создаем массив рёбер
export const initialEdges = salesFunnelData.reduce((acc, { edges }) => acc.concat(edges || []), []);

// console.log(initialNodes);
// console.log(initialEdges);
// console.log(salesFunnelData);