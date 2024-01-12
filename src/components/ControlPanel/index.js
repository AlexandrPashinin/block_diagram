// ControlPanel.js
import React from 'react';
import { Card, ListGroup, } from 'react-bootstrap';
import { MdAddCircleOutline } from 'react-icons/md';

const ControlPanel = ({ onLayoutChange, addNode, handleAddHelloNode }) => {

  const typeNodes = [
    {type:"hello", label: "Привет", size: 100,icon: <MdAddCircleOutline />},
    {type:"start", label: "start", size: 50,icon: <MdAddCircleOutline />},
  ]

  const handleAddNode = (i) => {
   return  addNode(typeNodes[i])
  }

  return (
    <Card className='h-100'>
      <Card.Body>
        <Card.Title>Редактор</Card.Title>
        <Card.Body>
          <ListGroup>
            {typeNodes.map((node, index) => (
              <ListGroup.Item
                key={index}
                action
                onClick={() => handleAddNode(index)}
              >
                {node.icon} Добавить "{node.label}"
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card.Body>
    </Card>
  );
}

export default ControlPanel;
