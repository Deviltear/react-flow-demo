import React, { memo } from 'react';
import { Handle, useReactFlow, useStoreApi, Position } from 'reactflow';
import { Select } from 'antd';
import './index.css'
const Option=Select.Option
const options = [
  {
    value: 'smoothstep',
    label: 'Smoothstep',
  },
  {
    value: 'step',
    label: 'Step',
  },
  {
    value: 'default',
    label: 'Bezier (default)',
  },
  {
    value: 'straight',
    label: 'Straight',
  },
];
type SelectReNodeProps ={
  value:any, handleId:string; nodeId:string
}
function SelectReNode({ value, handleId, nodeId }:SelectReNodeProps) {
  const { setNodes } = useReactFlow();
  const store = useStoreApi();

  const onChange = (e: string) => {
    const { nodeInternals } = store.getState();
    setNodes(
      Array.from(nodeInternals.values()).map((node) => {
        if (node.id === nodeId) {
          node.data = {
            ...node.data,
            selects: {
              ...node.data.selects,
              [handleId]: e,
            },
          };
        }

        return node;
      })
    );
  };

  return (
    <div className="custom-node__select">
      <div>Edge Type</div>
      <Select className="nodrag" onChange={onChange} value={value}>
        {options.map((v) => (
          <Option key={v.value} value={v.value}>
            {v.label}
          </Option>
        ))}
      </Select>
      <Handle type="source" position={Position.Right} id={handleId} />
    </div>
  );
}
type CustomSelectReNodeProps ={
  id:string
  data:any
}
function CustomSelectReNode({ id, data }:CustomSelectReNodeProps) {
  return (
    <>
      <div className="custom-node__header">
        This is a <strong>custom node</strong>
      </div>
      <div className="custom-node__body">
        {Object.keys(data.selects).map((handleId) => (
          <SelectReNode key={handleId} nodeId={id} value={data.selects[handleId]} handleId={handleId} />
        ))}
      </div>
    </>
  );
}

export default memo(CustomSelectReNode);
