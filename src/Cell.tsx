type CellProps = {
  className: string;
  startPoint: boolean;
  endPoint: boolean;
};
export default function Cell({ className, startPoint, endPoint }: CellProps) {
  return (
    <div
      className={`cell ${className}
       ${endPoint && "end-cell"} 
       ${startPoint && "start-cell"}
       `}
    />
  );
}