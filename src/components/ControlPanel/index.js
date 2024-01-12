// ControlPanel.js
import React , {useState} from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';

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
const [open , setOpen] = useState(false)
  const typeNodes = [
    {
      type: 'start', backgroundColor: 'red',
      data: {
        label: 'Начало диалога',
        width: 150,
        height: 60,
        icon: <MdAddCircleOutline />,
      },
      style: {
        backgroundColor: 'green',
        backgroundOpacity: 0.5,
      },
    },

    {
      type: 'check',
      data: {
        label: 'Первостепенная проверка условия',
        width: 150,
        height: 60,
        icon: <MdCheckCircle />,
      },
      style: {
        backgroundColor: 'lightGreen',
        backgroundOpacity: 0.5,
      },

    },
    {
      type: 'state',
      data: {
        label: 'Состояние диалога',
        width: 150,
        height: 60,
        icon: <MdRadioButtonUnchecked />,
      },
      style: {
        backgroundColor: 'white',
        backgroundOpacity: 0.5,
      },
    },
    {
      type: 'transfer',
      data: {
        label: 'Передача данных',
        width: 150,
        height: 60,
        icon: <MdSwapHoriz />,
      },
        style: {
        backgroundColor: 'orange',
        backgroundOpacity: 0.5,
      },
    },
    {
      type: 'end',
      data: {
        label: 'Конец сбора данных',
        width: 150,
        height: 60,
        icon: <MdHighlightOff />,
      },
       style: {
        backgroundColor: 'red',
        backgroundOpacity: 0.5,
      },
    },
    {
      type: 'reminder',
      data: {
        label: 'Напоминание',
        width: 150,
        height: 60,
        icon: <MdNotificationsActive />,
      },
      style: {
        backgroundColor: 'blue',
        backgroundOpacity: 0.5,
      },
    },
    {
      type: 'comment',
      data: {
        label: 'Комментарий',
        width: 150,
        height: 60,
        icon: <MdComment />,
      },
      style: {
        backgroundColor: 'grey',
        backgroundOpacity: 0.5,
      },
    },
  ];
const handleWindow = ()=>{
  setOpen(prev=>!prev)
}

  const handleAddNode = (i) => addNode(typeNodes[i]);
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>Редактор</Card.Title>
        <Card.Body>
          <ListGroup>
            <Button onClick={handleWindow}  style={{ backgroundColor: 'white', color: 'black', border: '1px solid gray', marginBottom: '10px' }}>Диалоговое окно состояний </Button>
            {open && typeNodes.map((node, index) => (
              <ListGroup.Item
                key={index}
                action
                onClick={() => handleAddNode(index)}
              >
                {node.data.icon} Добавить "{node.data.label}"
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card.Body>
    </Card>
  );
};

export default ControlPanel;
