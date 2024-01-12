// ControlPanel.js
import React from 'react';
import { Container, Row, Col, Button, Card, ListGroup,  } from 'react-bootstrap';
import { MdAddCircleOutline } from 'react-icons/md';
import DropdownComponent from '../DropdownPanel';

const ControlPanel = ({ onLayoutChange, handleAddStartNode, handleAddHelloNode }) => (
  <Card className='h-100'>
    <Card.Body>
      <Card.Title>Редактор</Card.Title>
      <DropdownComponent />
      <Card.Body>
        <ListGroup>
          <ListGroup.Item action onClick={handleAddStartNode}>
            <MdAddCircleOutline /> Добавить "Старт"
          </ListGroup.Item>
          <ListGroup.Item action onClick={handleAddHelloNode}>
            <MdAddCircleOutline /> Добавить "Привет"
          </ListGroup.Item>

          {/* Добавьте дополнительные кнопки или пункты списка здесь при необходимости */}
        </ListGroup>
      </Card.Body>
    </Card.Body>
  </Card>
);

export default ControlPanel;
