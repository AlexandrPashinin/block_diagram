import React, { useCallback, useState, useEffect } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import StartNode from './StartNode';
import HelloNode from './HelloNode';
import { Container, Row, Col, Button, Card, Offcanvas } from 'react-bootstrap';


const initialNodes = [
  {
    id: '1',
    type: 'start',
    position: { x: 0, y: 0 },
    data: { label: 'Начало' },
  },
  {
    id: '2',
    type: 'hello',
    position: { x: 200, y: 250 },
    data: { label: 'Начало' },
  },
  {
    id: '2a',
    data: { label: 'Node A.1' },
    position: { x: 230, y: 250 },
    parentNode: '2',
  },


];
const initialEdges = [
  { id: '1-2a', source: '1', target: '2' },
  { id: '2-2a', source: '2', target: '2a' },
];

const nodeTypes = {
  start: (props) => <StartNode {...props} additionalProp='valueForStart' />,
  hello: (props) => <HelloNode {...props} additionalProp='valueForHello' />,
};

export default function Flow() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => {
      const newEdge = {
        id: `e-${params.source}-${params.target}`,
        source: params.source,
        target: params.target,
      };
      setEdges((prevEdges) => [...prevEdges, newEdge]);
    },
    [setEdges],
  );

  const handleAddStartNode = () => {
    const newNode = {
      id: 'startNode',
      type: 'start',
      position: { x: 0, y: 0 },
      data: { label: 'Начало' },
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  const handleAddHelloNode = () => {
    const randomSuffix = Math.floor(Math.random() * 1000);

    const newNode = {
      id: `helloNode-${randomSuffix}`,
      type: 'hello',
      position: { x: 200, y: 0 },
      data: { label: `Привет! ${randomSuffix}` },
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);

  };

  return (
    <Container fluid>
      <Row>
        <Col xs={10}>
          <div style={{ width: '100%', height: '100vh' }}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
            >
              <Controls />
              <MiniMap />
              <Background variant='dots' gap={12} size={1} />
            </ReactFlow>
          </div>
        </Col>
        <Col>
          <Col md='auto'>
            <Card className='h-100'>
              <Card.Body>
                <Card.Title>Редактор</Card.Title>
                <Card.Subtitle>
                  <Button variant='primary' onClick={handleShow}>Управление</Button>
                </Card.Subtitle>
                <Card.Body>
                  <Col md={6}>
                    <Button className='mb-2 w-100' onClick={handleAddStartNode}>
                      Добавить "Старт"
                    </Button>
                  </Col>
                  <Col md={6}>
                    <Button className='mb-2 w-100' onClick={handleAddHelloNode}>
                      Добавить "Привет"
                    </Button>
                  </Col>
                </Card.Body>
              </Card.Body>
            </Card>
          </Col>
        </Col>
      </Row>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Панель Управления</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          DDDD
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
}