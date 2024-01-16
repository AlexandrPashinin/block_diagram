import { Button, CloseButton } from 'react-bootstrap';
import React, { useState } from 'react';

const stackStyle = {
  maxWidth: '550px',
  height: 'auto',
  marginTop: '10px',
  border: '1px solid gray',
  borderRadius: '5px',
  background: '#faf9f9'
};

const buttonStyle = {
  width: '100%',
  background: 'white',
  border: '1px dashed black',
  color: '#aba8a8'
}

const buttonStyleCreate={
  width: '90%',
  background: 'white',
  border: '1px solid black',
  color: '#aba8a8',
  marginBottom:'5px',

}

const closeButton = {
  width:'30px',
  height: '20px',
  border: '1px solid black',
  marginLeft: '15px',
  padding:'8px',
  marginBottom: '5px'

}
const ButtonComponents = () => {
    const [buttons, setButtons] = useState([]);

    const addNewButton = () => {
      setButtons(prevButtons => [...prevButtons, `Новая кнопка  действия  ${prevButtons.length + 1}`]);
    };

  const removeButton = index => {
    setButtons(prevButtons => prevButtons.filter((_, i) => i !== index));
  };
  return (
    <div style={stackStyle} >
      <div style={{ padding: '15px 10px'}}>
        <div style={{marginBottom:'2px'}}>Кнопки </div>
        {buttons.map((buttonText, index) => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button  key={index} style={buttonStyleCreate}>
              {buttonText}
            </Button>
            <CloseButton style={closeButton} onClick={() => removeButton(index)} />
          </div>
        ))}
        <Button style={buttonStyle} onClick={addNewButton} >Добавить кнопку</Button>
      </div>
    </div>
  )

}

export  default  ButtonComponents