import React from 'react';
import {
  Card,
  ListGroup,
  Button,
  ButtonGroup,
  Dropdown,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

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

const ControlPanel = ({ addNode }) => {

  const renderTypeNode = (index, node) => {
    const handleAddNode = () => addNode(typeNodes[index]);
    return (
      <Dropdown.Item key={index} onClick={handleAddNode}>
        {node.data.icon} {node.data.label}
      </Dropdown.Item>
    );
  };
  return (
    <Card className="h-100 shadow">
      <Card.Body className="d-flex flex-column">
        <Card.Title>Редактор</Card.Title>
        <Dropdown as={ButtonGroup}>
          {/*<Button className="btn-primary">Добавить узел</Button>*/}
          <Dropdown.Toggle split className="btn-primary" id="dropdown-split-basic" />
          <Dropdown.Menu>
            {typeNodes.map((node, index) => renderTypeNode(index, node))}
          </Dropdown.Menu>
        </Dropdown>
      </Card.Body>
      <Card.Footer>
        <ButtonGroup full size="sm">
          <Button className="btn btn-primary">Сохранить</Button>
          <Button className="btn btn-default">Сохранить и закрыть</Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
};

export default ControlPanel;
