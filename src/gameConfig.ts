export enum Point {
  obstacle = -1,
  solution = 1,
  normal = 0,
}

// export const INITIAL_MATRIX: number[][] = [
//   [0, 0, 0, 0, 0, 0, 0, -1, 0, 0],
//   [-1, 0, -1, 0, 0, 0, 0, -1, 0, 0],
//   [0, 0, -1, -1, 0, 0, 0, 0, 0, 0],
//   [0, 0, -1, -1, 0, 0, 0, -1, 0, 0],
//   [0, 0, -1, -1, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, -1, 0, 0],
// ];
export const INITIAL_MATRIX: number[][] = [
  [0, 0, 0, 0, 0, 0],
  [-1, 0, -1, 0, 0, 0],
  [0, 0, -1, -1, 0,0 ],
  [0, 0, -1, -1, 0, 0],
  [0, 0, -1, -1, 0, 0],
  [0, 0, 0, 0, -1, 0],
];

export const COLS = INITIAL_MATRIX[0].length;
export const ROWS = INITIAL_MATRIX.length;
