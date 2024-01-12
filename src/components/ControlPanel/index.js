// ControlPanel.js
import React from 'react';
import { Container, Row, Col, Button, Card, ListGroup, Offcanvas } from 'react-bootstrap';
import { MdAddCircleOutline } from 'react-icons/md';

const ControlPanel = ({ onLayoutChange, handleAddStartNode, handleAddHelloNode }) => (
  <Card className='h-100'>
    <Card.Body>
      <Card.Title>Редактор</Card.Title>
      <Card.Body>
        <ListGroup>
          <ListGroup.Item action onClick={handleAddStartNode}>
            <MdAddCircleOutline /> Добавить "Старт"
          </ListGroup.Item>
          <ListGroup.Item action onClick={handleAddHelloNode}>
            <MdAddCircleOutline /> Добавить "Привет"
          </ListGroup.Item>
          {/* Добавьте дополнительные кнопки здесь при необходимости */}
        </ListGroup>
      </Card.Body>
    </Card.Body>
  </Card>
);

export default ControlPanel;
