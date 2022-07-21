import React from "react";

type Props = {
  buttonClick: React.MouseEventHandler<HTMLButtonElement>
  buttonText: string
  bgColor: string
};

const Button = ({ buttonClick, buttonText, bgColor }: Props): JSX.Element => (
  <button
    className={`border rounded p-1 my-2 hover:shadow-md hover:bg-${bgColor}-500 transition-all`}
    onClick={buttonClick}
  >
    {buttonText}
  </button>
);

export default Button;
