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
    { type: 'start', label: 'Начало диалога', size: 100, icon: <MdAddCircleOutline /> },
    { type: 'check', label: 'Первостепенная проверка условия', size: 75, icon: <MdCheckCircle /> },
    { type: 'state', label: 'Состояние диалога', size: 75, icon: <MdRadioButtonUnchecked /> },
    { type: 'transfer', label: 'Передача данных', size: 75, icon: <MdSwapHoriz /> },
    { type: 'end', label: 'Конец сбора данных', size: 75, icon: <MdHighlightOff /> },
    { type: 'reminder', label: 'Напоминание', size: 75, icon: <MdNotificationsActive /> },
    { type: 'comment', label: 'Комментарий', size: 75, icon: <MdComment /> },
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
