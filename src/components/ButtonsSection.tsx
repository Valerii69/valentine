import { useState, Dispatch, SetStateAction, CSSProperties } from "react";

const MAX_BUTTON_SIZE = 204;
const START_BUTTON_SIZE = 60;
const START_NO_BUTTON_POSITION = {
  left: 50,
  top: 100,
};
const EXPEND_BUTTON_SIZE = 4;
const CONTAINER_SIZE = 580;

type ButtonsSectionProps = {
  noCount: number;
  setNoCount: Dispatch<SetStateAction<number>>;
  setYesPressed: Dispatch<SetStateAction<boolean>>;
};

export const ButtonsSection = ({
  setNoCount,
  noCount,
  setYesPressed,
}: ButtonsSectionProps) => {
  const [buttonSize, setButtonSize] = useState<number>(START_BUTTON_SIZE);
  const [position, setPosition] = useState({
    left: START_NO_BUTTON_POSITION.left,
    top: START_NO_BUTTON_POSITION.top,
  });

  const onNoHandleClick = () => {
    setButtonSize(buttonSize + EXPEND_BUTTON_SIZE * (noCount + 1));
    setNoCount((prev: number) => prev + 1);
  };

  const onYesHandleClick = () => {
    setYesPressed(true);
  };

  const handleMouseOver = () => {
    setPosition({
      left: Math.random() * (CONTAINER_SIZE - buttonSize),
      top: Math.random() * (CONTAINER_SIZE - buttonSize),
    });
  };

  const noButtonStyles: CSSProperties = {
    position: MAX_BUTTON_SIZE === buttonSize ? "absolute" : "static",
    left: MAX_BUTTON_SIZE === buttonSize ? `${position.left}px` : "",
    top: MAX_BUTTON_SIZE === buttonSize ? `${position.top}px` : "",
  };

  const noButtonClassName = `no-button ${
    buttonSize === MAX_BUTTON_SIZE ? "animate" : ""
  }`;

  return (
    <div className="buttonWrapper">
      <button
        className="yesButton"
        onClick={onYesHandleClick}
        style={{
          width: `${buttonSize}px`,
          height: `${buttonSize}px`,
        }}
      >
        Yes
      </button>
      <button
        onClick={onNoHandleClick}
        onMouseOver={
          MAX_BUTTON_SIZE === buttonSize ? handleMouseOver : undefined
        }
        style={noButtonStyles}
        className={noButtonClassName}
        disabled={buttonSize === MAX_BUTTON_SIZE}
      >
        No
      </button>
    </div>
  );
};
