import { useCallback } from 'react';
import ReactFlow, {
  Node,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Controls,
  Background

} from 'reactflow';

import CustomNode from './CustomNode';
import TextUpdaterNode from './Node/TextUpdaterNode';
import SelectNode from './Node/SelectNode';

import {edges as initialEdges,nodes as initialNodes} from './inintData';

// this is important! You need to import the styles from the lib to make it work
import 'reactflow/dist/style.css';

import './Flow.css';

const nodeTypes = {
  custom: CustomNode,
  textUpdater: TextUpdaterNode,
  customSelecter:SelectNode
};


function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      const edgeType = nodes.find((node) => node?.type === 'customSelecter')?.data?.selects[edge.sourceHandle] as any;
      edge.type = edgeType;
    }

    return edge;
  });
  return (
    <div className="Flow">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edgesWithUpdatedTypes}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
          style={{
        backgroundColor: '#D3D2E5',
      }}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;
