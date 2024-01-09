import React, {useCallback, useState} from 'react';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    useNodes,
    useEdges,
    addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import {Col, Card, Container, Row, CardHeader, Button} from "react-bootstrap";

const initialNodes = [
    {id: '1', position: {x: 0, y: 0}, data: {label: 'человек кликает на рекламу '}},
    {id: '2', position: {x: 0, y: 100}, data: {label: '95% населения планеты заражены! '}},
    {id: '3', position: {x: 0, y: 200}, data: {label: ' Ссылка на видео  '}},
    {id: '4', position: {x: 0, y: 300}, data: {label: ' Прохождение теста '}},
    {id: '5', position: {x: 0, y: 400}, data: {label: ' Получение видео '}},
    {id: '6', position: {x: 0, y: 500}, data: {label: ' Получение теста после видео '}},
    {id: '7', position: {x: 0, y: 600}, data: {label: ' получение нового видео '}},
    {id: '8', position: {x: 0, y: 700}, data: {label: 'Подписка на тематический канал в телеграмме '}},
];
const initialEdges = [{id: '1', source: '2', target: '2'}];

export default function App() {
    const [textCurrent, setTextCurrent] = useState(null);
    const [ textCreate, setTextCreate] = useState(false)
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    const handeleSelect = (event, nodes)=>{
        console.log(event,nodes);
        // text
        // setTextCurrent(text)
    }
    console.log('>nodes',nodes)

const handelTextCreate = () =>{
    setTextCreate(prevState => !prevState)
}

    return (

        <Row className="w-100">
            <Col xs={8}>
                <div style={{width: '100%', height: '100vh'}}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onSelectionContextMenu={handeleSelect}
                    >
                        <Controls/>
                        <MiniMap/>
                        <Background variant="dots" gap={12} size={1}/>
                    </ReactFlow>
                </div>
            </Col>
            <Col>
                <Card className="h-100" >
                    <Card.Body>
                        <Card.Title>editor</Card.Title>
                        <Card.Text>There are currently {nodes.length} nodes! </Card.Text>
                        <Card.Body>
                            {textCurrent && (<Button>{textCurrent}</Button>)}
                        </Card.Body>
                        {textCreate && <textarea placeholder="Введите сообщение..."  className="form-control mb-3  " id="exampleFormControlTextarea1" rows="3"/>}
                        <Row>
                            <Col onClick={handelTextCreate} md={6}>
                                <Button className="mb-2 w-100  text-dark">изменить текст </Button>
                            </Col>
                            <Col md={6}>
                                <Button className="mb-2 w-100">кнопки</Button>
                            </Col>
                            <Col md={6}>
                                <Button className="mb-2 w-100">Button 3</Button>
                            </Col>
                            <Col md={6}>
                                <Button className="mb-2 w-100">Button 4</Button>
                            </Col>
                            <Col md={6}>
                                <Button className="mb-2 w-100">Button 5</Button>
                            </Col>
                            <Col md={6}>
                                <Button className="mb-2 w-100">Button 6</Button>
                            </Col>
                        </Row>
                    </Card.Body>

                </Card>
            </Col>
        </Row>
    );
}