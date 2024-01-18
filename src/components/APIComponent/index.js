import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

// Компонент для выбора типа запроса
const RequestTypeSelect = ({ control, error }) => (
  <>
    <Form.Label>Тип запроса</Form.Label>
    <Form.Control as='select' {...control}>
      <option value='' disabled>Выберите тип запроса</option>
      <option value='get'>GET</option>
      <option value='post'>POST</option>
      <option value='put'>PUT</option>
      <option value='update'>UPDATE</option>
      <option value='delete'>DELETE</option>
    </Form.Control>
    {error && (
      <small className='text-danger'>{error.message}</small>
    )}
  </>
);

function APIComponent() {
  const { handleSubmit, control, reset, formState } = useForm();
  const [jsonParameters, setJsonParameters] = useState('');
  const [requestHeader, setRequestHeader] = useState('');
  const onSubmit = (data) => {
    console.log(data);
    // Дополнительная логика для обработки запроса
    reset();
  };

  return (
    <div>
      <h2>API - запрос</h2>

      <Form onSubmit={handleSubmit(onSubmit)} className='message-form'>
        <Form.Group  className='mt-3'>
          <Controller
            name='requestType'
            control={control}
            defaultValue=''
            rules={{ required: 'Выберите тип запроса' }}
            render={({ field, fieldState }) => (
              <RequestTypeSelect control={field} error={fieldState.error} />
            )}
          />
        </Form.Group>

        <Form.Group  className='mt-3'>
          <Form.Label>URL запроса</Form.Label>
          <Controller
            name="url"
            control={control}
            defaultValue=""
            rules={{ required: 'Введите URL запроса' }}
            render={({ field, fieldState }) => (
              <Form.Control
                type="text"
                placeholder="Введите URL запроса"
                {...field}
              />
            )}
          />
        </Form.Group>

        <Form.Group  className='mt-3'>
          <Form.Label>Заголовок запроса</Form.Label>
          <Controller
            name="requestHeader"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Form.Control
                as="textarea"
                rows={3}
                style={{ resize: 'none' }}
                placeholder="Введите заголовок запроса"
                {...field}
                value={requestHeader}
                onChange={(e) => setRequestHeader(e.target.value)}
              />
            )}
          />
        </Form.Group>

        <Form.Group  className='mt-3'>
          <Form.Label>JSON параметры</Form.Label>
          <Controller
            name="jsonParameters"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Form.Control
                as="textarea"
                rows={3}
                style={{ resize: 'none' }}
                placeholder="Введите JSON параметры"
                {...field}
                value={jsonParameters}
                onChange={(e) => setJsonParameters(e.target.value)}
              />
            )}
          />
        </Form.Group>

        <Button type='submit' variant='primary' className='mt-3 w-100'>
          Отправить запрос
        </Button>
      </Form>
    </div>
  );
}

export default APIComponent;
