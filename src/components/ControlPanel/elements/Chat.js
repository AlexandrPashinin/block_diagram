import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ChatApp = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={12} className="col-12">
          <div
            style={{
              height: '400px',
              border: '1px solid #ddd',
              overflowY: 'scroll',
              padding: '10px',
            }}
          >
            <div className="mb-2">
              <strong>Пользователь 1:</strong> Привет, как дела?
            </div>
            <div className="mb-2 mr-auto">
              {/* Используем ml-auto для выравнивания сообщения пользователя 2 справа */}
              <strong>Пользователь 2:</strong> Привет! Всё отлично, спасибо.
            </div>

          </div>
        </Col>
        <Col md={4} className="col-12">
          {/* В этой колонке нет формы ввода и кнопки отправить */}
        </Col>
      </Row>
    </Container>
  );
};

export default ChatApp;
