import { useState, Dispatch, SetStateAction, CSSProperties } from "react";

const MAX_BUTTON_SIZE = 204;
const START_BUTTON_SIZE = 60;
const EXPAND_BUTTON_SIZE = 4;
const CONTAINER_SIZE = 580;
const START_NO_BUTTON_POSITION = { left: 100, top: 100 };

type ButtonsSectionProps = {
  noCount: number;
  setNoCount: Dispatch<SetStateAction<number>>;
  setYesPressed: Dispatch<SetStateAction<boolean>>;
};

const getRandomPosition = (buttonSize: number) => ({
  left: Math.random() * (CONTAINER_SIZE - buttonSize),
  top: Math.random() * (CONTAINER_SIZE - buttonSize),
});

const getNoButtonStyles = (
  buttonSize: number,
  position: { left: number; top: number }
): CSSProperties => ({
  position: buttonSize >= MAX_BUTTON_SIZE ? "absolute" : "static",
  left: buttonSize >= MAX_BUTTON_SIZE ? `${position.left}px` : "",
  top: buttonSize >= MAX_BUTTON_SIZE ? `${position.top}px` : "",
});

export function ButtonsSection({
  setNoCount,
  noCount,
  setYesPressed,
}: ButtonsSectionProps) {
  const [buttonSize, setButtonSize] = useState(START_BUTTON_SIZE);
  const [position, setPosition] = useState(START_NO_BUTTON_POSITION);

  const increaseButtonSize = () => {
    setButtonSize((prevSize) => prevSize + EXPAND_BUTTON_SIZE * (noCount + 1));
    setNoCount((prev) => prev + 1);
  };

  return (
    <div className="buttonWrapper">
      <button
        className="yesButton"
        onClick={() => setYesPressed(true)}
        style={{ width: buttonSize, height: buttonSize }}
      >
        Так
      </button>
      <button
        className={`no-button ${
          buttonSize >= MAX_BUTTON_SIZE ? "animate" : ""
        }`}
        onClick={increaseButtonSize}
        onMouseOver={
          buttonSize >= MAX_BUTTON_SIZE
            ? () => setPosition(getRandomPosition(buttonSize))
            : undefined
        }
        style={getNoButtonStyles(buttonSize, position)}
        disabled={buttonSize >= MAX_BUTTON_SIZE}
      >
        Ні
      </button>
    </div>
  );
}
