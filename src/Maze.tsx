import React from "react";
import { Point } from "./gameConfig";
import Cell from "./Cell";

type MazeProps = {
  cells: number[][];
  ROWS: number
  COLS :number
};

export default function Maze({ cells,ROWS,COLS }: MazeProps) {
 
  const gridStyles: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${COLS},52px)`,
    gridTemplateRows: `repeat(${ROWS},52px)`,
    width: `${COLS * 52}px`,
    height: `${ROWS * 52}px`,
  };
  // 1 solution
  // -1 absticals
  // 0 normal
  return (
    <div className="maze" style={gridStyles}>
      {cells.map((row, i) =>
        row.map((col, j) => {
          const className =
            cells[i][j] === Point.obstacle
              ? "red-cell"
              : cells[i][j] === Point.solution
              ? "green-cell"
              : "";
          return (
            <Cell
              startPoint={i === 0 && j === 0}
              endPoint={i === ROWS - 1 && j === COLS - 1}
              key={`${i},${j}`}
              className={className}
            />
          );
        })
      )}
    </div>
  );
}
