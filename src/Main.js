import React, { useState } from "react";
import "./style.css";

function Main() {
  const [inputValue, setInputValue] = useState("");

  const display = (value) => {
    setInputValue(inputValue + value);
  };

  const calculate = () => {
    try {
      const answer = eval(inputValue).toString();
      setInputValue(answer);
    } catch (error) {
      setInputValue(error);
      setTimeout(() => {
        setInputValue("");
      }, 1500);
    }
  };

  const clear = () => {
    setInputValue("");
  };

  const deleteLastValue = () => {
    const str = inputValue.substring(0, inputValue.length - 1);
    setInputValue(str);
  };

  return (
    <>
      <div className="calculator shadow border">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <span onClick={() => clear()} className="clear">
          C
        </span>
        <span onClick={deleteLastValue} className="">
          D
        </span>
        <span onClick={() => display("%")} className="">
          %
        </span>
        <span onClick={() => display("/")} className="">
          /
        </span>

        <span onClick={() => display("7")}>7</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("9")}>9</span>
        <span onClick={() => display("*")} className="">
          *
        </span>

        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>
        <span onClick={() => display("-")} className="">
          -
        </span>

        <span onClick={() => display("1")}>1</span>
        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("3")}>3</span>
        <span onClick={() => display("+")} className="">
          +
        </span>

        <span onClick={() => display("0")}>0</span>
        <span onClick={() => display("00")}>00</span>
        <span onClick={() => display(".")}>.</span>
        <span onClick={() => calculate()} className="equal">
          =
        </span>
      </div>
    </>
  );
}

export default Main;
