import * as React from "react";
import "./styles.css";

const Rates: Array<boolean> = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

const Square: React.FC<{
  selected: boolean;
  onClick: () => void;
}> = ({ selected, onClick }) => {
  return (
    <div
      role="button"
      onClick={onClick}
      className={`box ${selected ? "selected" : ""}`}
    ></div>
  );
};

const Rater = () => {
  const currentNumber = React.useRef<number>();

  const [rates, setRates] = React.useState(() => Rates);

  const handleRating = (idx: number) => {
    if (currentNumber.current !== idx) {
      currentNumber.current = idx;
      setRates((prev) => {
        prev = Rates;
        const newArray = [...prev];
        newArray.splice(0, idx + 1);
        return [...Array(idx + 1).fill(true), ...newArray];
      });
    }
  };

  return (
    <div>
      <h1>{rates.filter((el) => el === true).length} Rating</h1>

      <div className="boxes">
        {rates.map((el, idx) => (
          <Square
            key={idx.toString()}
            selected={el}
            onClick={() => handleRating(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Rater;
