import { useState } from "react";
import Button from "./components/Button";
import { evaluate } from "mathjs";
import styles from "./styles/Calculator.module.css";

function App() {
  const [input, setInput] = useState("");
  const [value, setValue] = useState("");
  // эта строка добаляет текст к предыдущему, было 1, стало 10
  function handleClick(value) {
    setValue((prev) => prev + value);
  }

  function equal(value) {
    if (value === "=") {
    setInput(evaluate(input).toString());
    }
  }
  equal();

  function operation(value) {
    if (value === "+") return "operator";
    if (value === "-") return "operator";
    if (value === "×") return "operator";
    if (value === "÷") return "operator";
    if (value === "=") return "equal";
    if (value === "C") return "0";
    if (value === "←") return "operator.length-2";
    return "default";
  }

  const buttons = [
    { id: "7", label: "7" },
    { id: "8", label: "8" },
    { id: "9", label: "9" },
    { id: "divide", label: "÷" },
    { id: "4", label: "4" },
    { id: "5", label: "5" },
    { id: "6", label: "6" },
    { id: "minus", label: "-" },
    { id: "1", label: "1" },
    { id: "2", label: "2" },
    { id: "3", label: "3" },
    { id: "multiply", label: "×" },
    { id: "0", label: "0" },
    { id: "dot", label: "." },
    { id: "plus", label: "+" },
    { id: "equals", label: "=" },
    { id: "erase", label: "C" },
  ];

  return (
    <div className="App">
      <div className={styles.container}>
        <div className={styles.calculator}>
          <div className={styles.display}>{value}</div>
          <div className={styles.buttons}>
            {buttons.map((button, id) => (
              <Button key={button.id} onClick={() => handleClick(button.label)}
              variant={operation(button.label)} 
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
