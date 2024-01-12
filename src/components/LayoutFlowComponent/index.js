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

  const createNewNode = ({ type, label, suffix, size }) => {
    let position;
    if (nodes.length > 0) {
      const lastNode = nodes[nodes.length - 1];
      position = { x: lastNode.position.x + size, y: lastNode.position.y }; // Новый узел справа от последнего
    } else {
      position = { x: 0, y: 0 }; // Позиция для первого узла
    }
    return {
      id: `${type}-${suffix}`,
      type,
      position,
      data: { label },
    };
  };


  const handleAddHelloNode = () => {
    const randomSuffix = Math.floor(Math.random() * 1000);
    const newNode = createNewNode('hello', `Привет! ${randomSuffix}`, randomSuffix);
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  const addNode = (newNode) => {
    const randomSuffix = Math.floor(Math.random() * 1000);
    const node = createNewNode({ randomSuffix, ...newNode });
    setNodes((prevNodes) => [...prevNodes, node]);
  }

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
            addNode={addNode}
            handleAddHelloNode={handleAddHelloNode}
          />
        </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default LayoutFlowComponent;