import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';

const ChatApp = () => {
  const [messages, setMessages] = useState([
    { user: 1, text: 'Привет, как дела?' },
    { user: 2, text: 'Привет! Всё отлично, спасибо. :Пользователь 2' },
  ]);

  const { handleSubmit, control, reset } = useForm();

  const onSubmit = (data) => {
    if (data.message.trim() !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: 1, text: data.message },
      ]);

      reset();
    }
  };

  return (
    <Container className='mt-5'>
      <Row>
        <Col md={12} className="col-12">
          <div
            style={{
              height: '400px',
              border: '1px solid #ddd',
              overflowY: 'scroll',
              padding: '10px',
              margin:'0 5px'
            }}
          >
            {messages.map((message, index) => (
              <div key={index} className="mb-2">
                <strong>Пользователь {message.user}:</strong> {message.text}
              </div>
            ))}
          </div>
        </Col>
        <Col md={12} className="col-12">
          <Form onSubmit={handleSubmit(onSubmit)} className='mb-3 p-3'>
            <Form.Group style={{ border: '1px solid black', borderRadius: '5px' }}>
              <Controller

                name="message"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Form.Control
                    placeholder='Введите ваше сообщение.....'
                    as="textarea"
                    rows={1}
                    style={{ resize: 'none' }}
                    {...field}
                  />
                )}
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="my-2 w-100">
              Отправить
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatApp;
