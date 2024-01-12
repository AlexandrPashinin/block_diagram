import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

function TextUpdaterNode({ data, isConnectable, onDelete }) {
    const onChange = useCallback((evt) => {

    }, []);

    return (
        <div className="d-flex align-items-center justify-content-center"
             style={{height: '50px', width: '200px', border: '1px solid black', borderRadius: '5px'}}>
            <Handle type="target" position={Position.Top} isConnectable={isConnectable}/>
            <div>
                <input id="text" name="text" onChange={onChange} className="nodrag"/>
            </div>
            <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable}/>
        </div>
    );
}

export default TextUpdaterNode;
