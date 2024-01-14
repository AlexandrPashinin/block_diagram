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
  MdAnalytics,
} from 'react-icons/md';
import { TbApi } from 'react-icons/tb';
import { FaBars } from 'react-icons/fa';
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
    sendMessage: true,
    attachFile: false,
    performAction: false,
    calculator: false,
    buttons: false,
    api: false,
    analytics: false,
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
    <Card className='h-100 shadow'>
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

        {buttonStates.attachFile && <div className='mt-3'>Вложение</div>}
        {buttonStates.buttons && <div className='mt-3'>Кнопки</div>}
        {buttonStates.performAction && <div className='mt-3'>Действие</div>}
        {buttonStates.calculator && <div className='mt-3'>Калькулятор</div>}
        {buttonStates.api && <div className='mt-3'>API - запрос</div>}
        {buttonStates.analytics && <div className='mt-3'>Аналитика</div>}

        {/*sendMessage: true,
    attachFile: false,
    performAction: false,
    calculator: false,
    buttons: false,
    api: false,
    analytics: false,*/}

        <div className='mt-3' style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4px' }}>

          <Button className='d-flex align-items-center justify-content-start'
                  variant={buttonStates.sendMessage ? 'primary' : 'outline-primary'} onClick={() => {
            handleSendMessage();
            handleButtonClick('sendMessage');
          }}>
            <BiMessage style={{ marginRight: 4 }} /> Сообщение
          </Button>

          <Button className='d-flex align-items-center justify-content-start'
                  variant={buttonStates.attachFile ? 'primary' : 'outline-primary'} onClick={() => {
            handleAttachFile();
            handleButtonClick('attachFile');
          }}>
            <BiPaperclip style={{ marginRight: 4 }} /> Вложение
          </Button>

          <Button className='d-flex align-items-center justify-content-start'
                  variant={buttonStates.buttons ? 'primary' : 'outline-primary'} onClick={() => {
            handleButtonClick('buttons');
          }}>
            <FaBars style={{ marginRight: 4 }} /> Кнопки
          </Button>

          <Button className='d-flex align-items-center justify-content-start'
                  variant={buttonStates.performAction ? 'primary' : 'outline-primary'} onClick={() => {
            handlePerformAction();
            handleButtonClick('performAction');
          }}>
            <BiTask style={{ marginRight: 4 }} /> Действие
          </Button>

          <Button className='d-flex align-items-center justify-content-start'
                  variant={buttonStates.calculator ? 'primary' : 'outline-primary'} onClick={() => {
            handleCalculator();
            handleButtonClick('calculator');
          }}>
            <BiCalculator style={{ marginRight: 4 }} /> Калькулятор
          </Button>

          <Button className='d-flex align-items-center jjustify-content-start'
                  variant={buttonStates.api ? 'primary' : 'outline-primary'} onClick={() => {
            handleButtonClick('api');
          }}>
            <TbApi style={{ marginRight: 4 }} /> Api - запрос
          </Button>

          <Button className='d-flex align-items-center justify-content-start'
                  variant={buttonStates.analytics ? 'primary' : 'outline-primary'} onClick={() => {
            handleButtonClick('analytics');
          }}>
            <MdAnalytics style={{ marginRight: 4 }} /> Аналитика
          </Button>

        </div>

      </Card.Body>
      <Card.Footer className='d-flex justify-content-center'>
        <ButtonGroup size='sm'>
          <Button className='btn btn-primary' onClick={() => editNode(elementState)}>Сохранить</Button>
          <Button className='btn btn-default' onClick={() => editNode(elementState)}>Сохранить и закрыть</Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
};

export default ControlPanel;
