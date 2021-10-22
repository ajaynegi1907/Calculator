
export interface DisplayProps {
  expression: string;
  result?: number;
}

const Display = ({ expression, result }: DisplayProps): JSX.Element => {
  return (
    <div className="display">
      <div className="display-expression">{expression}</div>
      <div className="display-result">{result !== undefined ? result : " "}</div>
    </div>
  );
};

export default Display;
