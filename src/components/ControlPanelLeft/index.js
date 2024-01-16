import React, {useState } from 'react';
import {
  Card,
  Button,
  ButtonGroup,
  Dropdown,
  Container,
  Row,
  Col, Form,
} from 'react-bootstrap';


const ControlPanelLeft = ({toggleCardLeft}) => {
const [open , setOpen] = useState(false)

const handleOpenWindow = () => {
  setOpen((prev)=>!prev)
}

  const styles = {
    paddingRight: '0 !important',
    paddingLeft: '0 !important',
  }
  return (
    <>
      <Container fluid >
        <Row>
          <Col  style={styles}>
              <Card  className='vh-100 shadow d-flex flex-column'>
                <Card.Body className='d-flex flex-column'>
                  <Card.Title>Проект</Card.Title>
                </Card.Body>
                {open &&
                  <Form className='mb-3 p-3' >
                  <Form.Group  style={{border:'1px solid black', borderRadius:'5px'}} >
                  <Form.Control
                  as='textarea'
                  rows={10}
                  />
                  </Form.Group>
                  </Form>
                }
                <Card.Footer className='d-flex justify-content-center'>
                  <ButtonGroup size='sx'>
                    <Button className='btn btn-primary'  onClick={handleOpenWindow} >открыть чат бота </Button>
                  </ButtonGroup>
                </Card.Footer>
              </Card>
          </Col>
          <Col md={1} style={styles} >
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ControlPanelLeft;
