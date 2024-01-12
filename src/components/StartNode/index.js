// StartNode.js
import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

const StartNode = ({ data, isConnectable }) => {

    const [buttonCount, setButtonCount] = useState(0);

    const handleAddButton = () => {
        setButtonCount((prevCount) => prevCount + 1);
    };

    const buttons = Array.from({ length: buttonCount }, (_, index) => (
        <button key={index} className="btn btn-secondary m-2">
            Кнопка {index + 1}
        </button>
    ));

    console.log(data, "data");

    return (
        <div className="border border-primary p-3 rounded">
            <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
            <h4>Привет</h4>
            <p>{data.label}</p>
            <div>
                <p>Добавить кнопки:</p>
                <button className="btn btn-success" onClick={handleAddButton}>
                    Добавить кнопку
                </button>
            </div>
            <div className="mt-3 d-flex flex-column">{buttons}</div>



            <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
        </div>
    );
};

export default StartNode;
