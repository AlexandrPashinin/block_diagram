// LayoutFlowComponent.js
import React, { useCallback, useState } from 'react';
import { useNodesState, useEdgesState, useReactFlow } from 'reactflow';
import { initialNodes, initialEdges } from '../../utils/nodes-edges.js';
import Graph from '../Graph';
import ControlPanel from '../ControlPanel';
import { Container, Row, Col } from 'react-bootstrap';


const LayoutFlowComponent = () => {

  const { fitView } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [element, setElement] = useState({});

  const onLayout = useCallback(
    (direction) => {
    }, []);

  const createNewEdge = (newNode, prevNode) => {
    return {
      id: `e${prevNode.id}-${newNode.id}`,
      source: prevNode.id,
      target: newNode.id,
      animated: true, // или любые другие свойства, которые вы хотите добавить
    };
  };
  const createNewNode = ({ type, data, suffix, size, style }) => {
    let position;
    if (nodes.length > 0) {
      const lastNode = nodes[nodes.length - 1];
      position = {
        x: lastNode.position.x + data.width,
        y: lastNode.position.y + data.height,
      };
    } else {
      position = { x: 0, y: 0 }; // Позиция для первого узла
    }
    return {
      id: `${type}-${suffix}`,
      type,
      position,
      data: data,
      style,
    };
  };

  const handleNodeClick = (event, node) => {
    setElement(node);
  };

  const addNode = (newNode) => {
    const randomSuffix = Math.floor(Math.random() * 1000);
    const node = createNewNode({ randomSuffix, ...newNode });
    const parentNode = nodes [nodes.length - 1];

    setNodes((prevNodes) => [...prevNodes, node]);
    // const { parentNode } = nodes[-1]
    if (!parentNode) {
      return;
    }

    const edge = createNewEdge(node, parentNode);
    setEdges((prevEdges) => [...prevEdges, edge]);
  };


  const editNode = (newNode) => {

    setNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.id === newNode.id ? { ...node, ...newNode } : node
      )
    );

  };

  return (
    <Container fluid>
      <Row className="h-100">
        <Col className="h-100" xs={9}>
          <Graph nodes={nodes} edges={edges} onNodeClick={handleNodeClick} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} />
        </Col>
        <Col className="h-100">
          <ControlPanel
            editNode={editNode}
            addNode={addNode}
            element={element}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LayoutFlowComponent;
