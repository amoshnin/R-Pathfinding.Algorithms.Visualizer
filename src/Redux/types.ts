export type GridType = Array<Array<NodeType>>;
export type NodeType = {
  column: number;
  row: number;
  isStart: boolean;
  isFinish: boolean;
  distance: number;
  isWall: boolean;
  isVisited: boolean;
  previousNode: NodeType | null;
};
