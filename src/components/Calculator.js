import { useState } from "react";
import * as math from "mathjs";
import styles from "../styles/Calculator.module.css";

function Calculator() {
  // хранит текущий ввод или результат вычислений
  const [input, setInput] = useState("0");
  const [error, setError] = useState(null);

  function handleClick(value) {
    if (value === "C") {
      // сброс
      setInput("0");
      setError(null);
      return;
    } else if (value === "=") {
      try {
        // вычисления при помощи mathjs
        const result = math.evaluate(input);
        setInput(result.toString());
        setError(null);
      } catch (error) {
        setError("Некорректное выражение!");
      }
      return;
    }
    // добавляем значение к текущему вводу
    // setInput((prev) => {
      // если текущее значение "0" и вводится не оператор, заменяем "0" на новое значение. Это предотвращает такие случаи, как "0123"
    //   if (prev === "0" && !["+", "-", "*", "/", "."].includes(value)) {
    //     return value;
    //   }
    //   return prev + value;
    // });
    setInput((prev) => (prev === "0" ? value : prev + value));
  }

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <div className={styles.display}>
            {input}
{error && <div className={styles.error-message}>{error}</div>}
        </div>
        <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={()=> handleClick("1") }>1</button>
        <button className={styles.button} onClick={()=> handleClick("2") }>2</button>
        <button className={styles.button} onClick={()=> handleClick("3") }>3</button>
        <button className={styles.button} onClick={()=> handleClick("4") }>4</button>
        <button className={styles.button} onClick={()=> handleClick("5") }>5</button>
        <button className={styles.button} onClick={()=> handleClick("6") }>6</button>
        <button className={styles.button} onClick={()=> handleClick("7") }>7</button>
        <button className={styles.button} onClick={()=> handleClick("8") }>8</button>
        <button className={styles.button} onClick={()=> handleClick("9") }>9</button>
        <button className={styles.button} onClick={()=> handleClick("0") }>0</button>
        <button className={styles.button} onClick={()=> handleClick("+") }>+</button>
        <button className={styles.button} onClick={()=> handleClick("-") }>-</button>
        <button className={styles.button} onClick={()=> handleClick("*") }>x</button>
        <button className={styles.button} onClick={()=> handleClick("/") }>÷</button>
        <button className={styles.button} onClick={()=> handleClick(".") }>,</button>
        <button className={styles.button} onClick={()=> handleClick("=") }>=</button>
        <button className={styles.button} onClick={()=> handleClick("C") }>C</button>
        </div>
        </div>
    </div>
  );
}
export default Calculator;
