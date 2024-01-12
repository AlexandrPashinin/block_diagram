import React, {useCallback, useState,useEffect} from 'react';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import {Col, Card, Container, Row, CardHeader, Button} from "react-bootstrap";
import TextUpdaterNode from './TextUpdaterNode'



// начальные блоки
const initialNodes = [];

//построение связей между блоками
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const nodeTypes = { textUpdater: TextUpdaterNode };

export default function App() {
    const [ textCreate, setTextCreate] = useState(false)
    const [ blockCreate, setBlockCreate] = useState([])
    const [newBlocks, setNewBlocks] = useState([]);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    const handelTextCreate = () =>{
        setTextCreate(prevState => !prevState)
    }

    // создание нового блока
    const handleBlockCreate = () => {
        const newNode = {
            id: `${blockCreate.length + newBlocks.length + 1}`,
            position: { x: 0, y: (blockCreate.length + newBlocks.length) * 100 },
            data: { label: 'Новый блок', },
            type: 'textUpdater'
        };
        setNewBlocks((prevBlocks) => [...prevBlocks, newNode]);
    };


    // Обновляем узлы при изменении newBlocks
    useEffect(() => {

        setNodes((prevNodes) => [...prevNodes, ...newBlocks]);

    }, [newBlocks, setNodes]);


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
                        nodeTypes={nodeTypes}
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
                        <Card.Body>
                        </Card.Body>
                        {textCreate && <textarea placeholder="Введите сообщение..."  className="form-control mb-3  " id="exampleFormControlTextarea1" rows="3"/>}
                        <Row>
                            <Col onClick={handelTextCreate} md={6}>
                                <Button className="mb-2 w-100  text-dark">изменить текст </Button>
                            </Col>
                            <Col md={6}>
                                <Button className="mb-2 w-100"  onClick={handleBlockCreate} >добавить блок </Button>
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