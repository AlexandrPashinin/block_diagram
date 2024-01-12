
import { Container, Row, Col, Button, Card, ListGroup,  } from 'react-bootstrap';

const StartDialogue =( {title, image} ) =>{
  const buttonStyle = {
    backgroundColor: ' !important',
    color: 'white !important',
    border: 'none !important',
    marginLeft: '3px',
    '&:hover': {
      background: ' !important',
      color: 'white !important',
    },
  };


  return(
    <>
      {image}
      <Button  variant="secondary" style={buttonStyle}   > {title}</Button>
    </>


  )
}


export default  StartDialogue