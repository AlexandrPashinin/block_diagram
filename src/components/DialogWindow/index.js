
import { Col, Card, Row, Button } from 'react-bootstrap';

const DialogWindow  = () =>{
    return(
        <div className=' border rounded-3 border-dark p-3 '>
            <Col > <Button  className=" mb-2 w-100 btn-secondary ">сценарий1</Button ></Col>
            <Col><Button  className="mb-2 w-100 btn-secondary ">сценарий2</Button > </Col>
            <Col><Button  className="mb-2 w-100 btn-secondary">сценарий3</Button > </Col>
            <Col><Button  className="mb-2 w-100 btn-secondary">сценарий4</Button> </Col>
        </div>
    )
}


export  default  DialogWindow