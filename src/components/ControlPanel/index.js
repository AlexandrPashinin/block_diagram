import React, { useEffect, useState } from 'react';
import {
  Card,
  ListGroup,
  Button,
  ButtonGroup,
  Dropdown,
  Container,
  Row,
  Col, Form,
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
import { BiAlarmAdd, BiCalculator, BiMessage, BiPaperclip, BiTask } from 'react-icons/bi';

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

const ControlPanel = ({ element, editNode, addNode }) => {
  const [elementState, setElementState] = useState({});
  const [buttonStates, setButtonStates] = useState({
    sendMessage: false,
    attachFile: false,
    performAction: false,
    calculator: false,
  });
  const renderTypeNode = (index, node) => {
    const handleAddNode = () => addNode(typeNodes[index]);
    return (
      <Dropdown.Item key={index} onClick={handleAddNode}>
        {node.data.icon} {node.data.label}
      </Dropdown.Item>
    );
  };

  const handleSendMessage = () => {
    // Handle message button click
    console.log('Sending a message...');

  };

  const handleAttachFile = () => {
    // Handle attachment button click
    console.log('Attaching a file...');
  };

  const handlePerformAction = () => {
    // Handle action button click
    console.log('Performing an action...');
  };

  const handleCalculator = () => {
    // Handle calculator button click
    console.log('Opening calculator...');
  };

  const handleChange = (e) => {
    setElementState((prevState) => ({
      ...prevState,
      data: {
        ...prevState.data,
        label: e.target.value,
      },
    }));
  };

  const handleButtonClick = (buttonName) => {
    setButtonStates((prevButtonState) => ({
      ...prevButtonState,
      [buttonName]: !prevButtonState[buttonName],
    }));
  };


  useEffect(() => {
    setElementState(element);
  }, [element]);

  return (
    <Card className='h-100 shadow' style={{ maxWidth: '208px' }}>
      <Card.Body className='d-flex flex-column'>
        <Card.Title>Редактор</Card.Title>
        <Dropdown as={ButtonGroup}>
          {/*<Button className="btn-primary">Добавить узел</Button>*/}
          <Dropdown.Toggle split className='btn-primary' id='dropdown-split-basic' />
          <Dropdown.Menu>
            {typeNodes.map((node, index) => renderTypeNode(index, node))}
          </Dropdown.Menu>
        </Dropdown>

        {buttonStates.sendMessage && <Form className='mt-3'>
          <Form.Group>
            <Form.Control
              as='textarea'
              rows={3}
              value={elementState?.data?.label}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>}

        {buttonStates.attachFile &&  <div className='mt-3'>Вложение</div> }

        <div className='mt-3' style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>

          <Button variant={buttonStates.sendMessage ? 'primary' : 'outline-primary'} onClick={() => {
            handleSendMessage();
            handleButtonClick('sendMessage');
          }}>
            <BiMessage /> Сообщение
          </Button>

          <Button variant={buttonStates.attachFile ? 'primary' : 'outline-primary'} onClick={() => {
            handleAttachFile();
            handleButtonClick('attachFile');
          }}>
            <BiPaperclip /> Вложение
          </Button>

          <Button variant={buttonStates.performAction ? 'primary' : 'outline-primary'} onClick={() => {
            handlePerformAction();
            handleButtonClick('performAction');
          }}>
            <BiTask /> Действие
          </Button>

          <Button variant={buttonStates.calculator ? 'primary' : 'outline-primary'} onClick={() => {
            handleCalculator();
            handleButtonClick('calculator');
          }}>
            <BiCalculator /> Калькулятор
          </Button>
        </div>

      </Card.Body>
      <Card.Footer>
        <ButtonGroup full size='sm'>
          <Button className='btn btn-primary' onClick={() => editNode(elementState)}>Сохранить</Button>
          <Button className='btn btn-default' onClick={() => editNode(elementState)}>Сохранить и закрыть</Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
};

export default ControlPanel;
