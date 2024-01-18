
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
  const [isCardOpen, setIsCardOpen] = useState(true);

  const onLayout = useCallback(
    (direction) => {
    }, []);

  const createNewEdge = (newNode, prevNode) => {
    return {
      id: `e${prevNode.id}-${newNode.id}`,
      source: prevNode.id,
      target: newNode.id,
      animated: true,
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

const styles = {
  paddingRight: '0 !important',
  paddingLeft: '0 !important',
}

  const toggleCard = () => {
    setIsCardOpen(!isCardOpen);
  };


  return (
    <Container fluid  >
      <Row className="h-100" >
        <Col className="vh-100" xs = {isCardOpen ? 9: 12}  >
          <Graph  toggleCard={toggleCard} isCardOpen={isCardOpen} nodes={nodes} edges={edges} onNodeClick={handleNodeClick} onNodesChange={onNodesChange}
                 onEdgesChange={onEdgesChange} />
        </Col>
        <Col className="vh-100" xs={ isCardOpen ? 3 : 0} style={styles} >
          <ControlPanel
            toggleCard={toggleCard}
            setIsCardOpen={setIsCardOpen}
            isCardOpen={isCardOpen}
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
