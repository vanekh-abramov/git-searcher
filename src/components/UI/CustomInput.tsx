import React from "react";

type Props = {
  inputValue: string;
  inputChange: React.ChangeEventHandler<HTMLInputElement>;
};

const CustomInput = ({ inputValue, inputChange }: Props): JSX.Element => (
  <input
    className="border py-2 px-4 w-full h-[42px] mb-2"
    type="text"
    name="search"
    id="search"
    value={inputValue}
    autoComplete="off"
    onChange={inputChange}
  />
);

export default CustomInput;
