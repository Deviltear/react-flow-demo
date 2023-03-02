import { useCallback } from 'react';
import { Handle, Position,NodeProps } from 'reactflow';
import { Input } from 'antd';
import './index.css'
const handleStyle = { left: 10 };

function TextUpdaterNode({ data, isConnectable }:NodeProps) {
  const onChange = useCallback((e: any) => {
    console.log(e);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div className='clearInput'>
        <Input placeholder="input with clear icon" allowClear onChange={onChange} />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      />
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
    </div>
  );
}

export default TextUpdaterNode;
