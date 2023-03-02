import React from 'react';
import { MarkerType, Position,Node,Edge } from 'reactflow';

export const nodes:Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Node 1' },
    position: { x: 250, y: 5 },
    draggable:false
  },
  {
    id: '2',
    data: { label: 'Node 2' },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    data: { label: 'Node 3' },
    position: { x: 400, y: 100 },
  },
  {
    id: '4',
    data: { label: 'Node 4' },
    position: { x: 400, y: 200 },
    type: 'custom',

  },
  { id: '5', type: 'textUpdater', position: { x: 100, y: 200 }, data: { value: 123 }, connectable: true },
  {
    id: '6',
    type: 'customSelecter',
    position: { x: 100, y: 300 },
    data: {
      selects: {
        'handle-0': 'smoothstep',
        'handle-1': 'smoothstep',
      },
    },
  },
  {
    id: '7',
    type: 'output',
    data: {
      label: 'custom style',
    },
    className: 'circle',
    style: {
      background: '#2B6CB0',
      color: 'white',
    },
    position: { x: 550, y: 300 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '8',
    type: 'output',
    style: {
      background: '#63B3ED',
      color: 'white',
      width: 100,
    },
    data: {
      label: 'Node',
    },
    position: { x: 550, y: 450 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '9',
    type: 'default',
    className: 'annotation',
    data: {
      label: (
        <>
        On the bottom left you see the<strong>Controls</ strong > and the bottom right the{ ' '}
        < strong > MiniMap This is also just a node 🥳</strong>
  </>
      ),
    },
  selectable: false,
    position: { x: 180, y: 600 },
  },
];

export const edges:Edge[] = [
  { id: 'e1-2', source: '1', target: '2', label: 'to2', type: 'step' },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  {
    id: 'e4-5',
    source: '6',
    target: '7',
    type: 'smoothstep',
    sourceHandle: 'handle-0',
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e4-6',
    source: '6',
    target: '8',
    type: 'smoothstep',
    sourceHandle: 'handle-1',
    data: {
      selectIndex: 1,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];
