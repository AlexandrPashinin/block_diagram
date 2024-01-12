// ControlPanel.js
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import {
  MdAddCircleOutline,
  MdCheckCircle,
  MdRadioButtonUnchecked,
  MdSwapHoriz,
  MdHighlightOff,
  MdNotificationsActive,
  MdComment,
  // Импортируйте другие иконки, соответствующие вашему дизайну
} from 'react-icons/md';

const ControlPanel = ({ addNode }) => {

  const typeNodes = [
    { type: 'start', backgroundColor:"red", label: 'Начало диалога', size: 100, icon: <MdAddCircleOutline /> ,style: {
        backgroundColor: 'green',
        backgroundOpacity: 0.5,
      }},
    { type: 'check', label: 'Первостепенная проверка условия', size: 75, icon: <MdCheckCircle /> ,style: {
        backgroundColor: 'lightGreen',
        backgroundOpacity: 0.5,
      }},
    { type: 'state', label: 'Состояние диалога', size: 75, icon: <MdRadioButtonUnchecked />,style: {
        backgroundColor: 'white',
        backgroundOpacity: 0.5,
      } },
    { type: 'transfer', label: 'Передача данных', size: 75, icon: <MdSwapHoriz />,style: {
        backgroundColor: 'orange',
        backgroundOpacity: 0.5,
      } },
    { type: 'end', label: 'Конец сбора данных', size: 75, icon: <MdHighlightOff />,style: {
    backgroundColor: 'red',
      backgroundOpacity: 0.5,
  } },
    { type: 'reminder', label: 'Напоминание', size: 75, icon: <MdNotificationsActive /> ,style: {
        backgroundColor: 'blue',
        backgroundOpacity: 0.5,
      }},
    { type: 'comment', label: 'Комментарий', size: 75, icon: <MdComment />,
      style: {
        backgroundColor: 'grey',
        backgroundOpacity: 0.5,
      }
    },
  ];

  const handleAddNode = (i) => addNode(typeNodes[i]);
  return (
    <Card className="h-100">
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
};

export default ControlPanel;
