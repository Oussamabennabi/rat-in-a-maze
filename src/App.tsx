import "./App.css";
import { COLS, INITIAL_MATRIX, Point, ROWS } from "./gameConfig";
import Maze from "./Maze";



function App() {
 
  let paths:any = calculatePaths(INITIAL_MATRIX,0,0, ROWS, COLS)

  return (
    <>
      <main className="App">
        <Maze ROWS={ROWS} COLS={COLS} cells={INITIAL_MATRIX} />
      </main>
      <h1>Totla Paths : { paths.length-1}</h1>
      <div className="solutions-container">
        {paths.map((path) => createMaze(INITIAL_MATRIX, ROWS, COLS, path))}
      </div>
    </>
  );
}

function createMaze(
  mat: number[][],
  rows: number,
  columns: number,
  path:number[][]):any {
let matrix = Array(rows).fill(0).map(() => Array(columns).fill(0));
  
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      matrix[i][j] = mat[i][j];
    }
  }

  path.forEach((cordinate) => {
    matrix[cordinate[0]][cordinate[1]] = Point.solution
  });
  return <Maze COLS={columns} ROWS={rows} cells={matrix} />
}



function calculatePaths(
  matrix: number[][],
  i: number,
  j: number,
  rows: number,
  columns: number
):number[][] {

  let cordinates:number[][]=[[]]
  let visited: number[][] = Array(rows).fill(0).map(() => Array(columns).fill(0));
  calculatePathsUtil(matrix, visited, i, j, rows, columns, [],cordinates);
  return cordinates;
  
}

function calculatePathsUtil(
  matrix: number[][],
  visited: number[][],
  i: number,
  j: number,
  rows: number,
  columns: number,
  currentpath: any,
  cordinates:number[][]
) {
  if (i < 0 || i >= rows || j < 0 || j >= columns) return;
  if (matrix[i][j] === Point.obstacle || visited[i][j] === 1) return;
  if (i === rows - 1 && j === columns - 1) {
  
    cordinates.push([...currentpath]);
    visited[i][j] = 0;
    return;
  }
  visited[i][j] = 1;
  //up
  currentpath.push([i - 1, j]);
  calculatePathsUtil(matrix, visited, i - 1, j, rows, columns, currentpath,cordinates);
  currentpath.pop();

  //down
  currentpath.push([i + 1, j]);
  calculatePathsUtil(matrix, visited, i + 1, j, rows, columns, currentpath,cordinates);
  currentpath.pop();
  //right
  currentpath.push([i, j + 1]);
  calculatePathsUtil(matrix, visited, i, j + 1, rows, columns, currentpath,cordinates);
  currentpath.pop();
  //left
  currentpath.push([i, j - 1]);
  calculatePathsUtil(matrix, visited, i, j - 1, rows, columns, currentpath,cordinates);
  currentpath.pop();

  visited[i][j] = 0;

  return;
}

export default App;
