// LayoutFlowComponent.js
import React, { useCallback } from 'react';
import { useNodesState, useEdgesState, useReactFlow } from 'reactflow';
import { initialNodes, initialEdges } from '../../utils/nodes-edges.js';
import Graph from '../Graph';
import ControlPanel from '../ControlPanel';
import { Container, Row, Col } from 'react-bootstrap';


const LayoutFlowComponent = () => {

  const { fitView } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onLayout = useCallback(
    (direction) => {
    }, []);

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

  const handleAddStartNode = () => {
    const randomSuffix = Math.floor(Math.random() * 1000);
    const newNode = {
      id: `startNode-${randomSuffix}`,
      type: 'start',
      position: { x: 0, y: 0 },
      data: { label: 'Начало' },
    };

    setNodes((prevNodes) => [...prevNodes, newNode]);
  };


  return (
    <Container fluid>
      <Row>
        <Col xs={10}>
          <Graph nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} />
        </Col>
        <Col>
        <Col md='auto'>
          <ControlPanel
            onLayoutChange={onLayout}
            handleAddStartNode={handleAddStartNode}
            handleAddHelloNode={handleAddHelloNode}
          />
        </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default LayoutFlowComponent;