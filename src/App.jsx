import { useState } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Header from "./components/Header";
import Display from "./components/Display";
import Keypad from "./components/Keypad";

function calculate(a, b, op) {
  const x = parseFloat(a);
  const y = parseFloat(b);
  if (isNaN(x) || isNaN(y)) return "Error";
  switch (op) {
    case "+":
      return String(x + y);
    case "-":
      return String(x - y);
    case "x":
      return String(x * y);
    case "/":
      return y === 0 ? "Error" : String(x / y);
    default:
      return b;
  }
}

function CalculatorInner() {
  const { styles } = useTheme();
  const [current, setCurrent] = useState("399981");
  const [previous, setPrevious] = useState(null);
  const [operator, setOperator] = useState(null);
  const [overwrite, setOverwrite] = useState(false);

  const handlePress = (key) => {
    if (current === "Error" && key !== "RESET") {
      setCurrent("0");
      setPrevious(null);
      setOperator(null);
    }

    if (/[0-9]/.test(key)) {
      if (overwrite || current === "0") {
        setCurrent(key);
        setOverwrite(false);
      } else {
        if (current.replace(/[^0-9]/g, "").length >= 15) return;
        setCurrent(current + key);
      }
      return;
    }

    if (key === ".") {
      if (overwrite) {
        setCurrent("0.");
        setOverwrite(false);
        return;
      }
      if (!current.includes(".")) setCurrent(current + ".");
      return;
    }

    if (["+", "-", "x", "/"].includes(key)) {
      if (previous !== null && operator && !overwrite) {
        const result = calculate(previous, current, operator);
        setPrevious(result);
        setCurrent(result);
      } else {
        setPrevious(current);
      }
      setOperator(key);
      setOverwrite(true);
      return;
    }

    if (key === "=") {
      if (operator && previous !== null) {
        const result = calculate(previous, current, operator);
        setCurrent(result);
        setPrevious(null);
        setOperator(null);
        setOverwrite(true);
      }
      return;
    }

    if (key === "DEL") {
      if (overwrite) return;
      if (current.length <= 1 || (current.length === 2 && current.startsWith("-"))) {
        setCurrent("0");
      } else {
        setCurrent(current.slice(0, -1));
      }
      return;
    }

    if (key === "RESET") {
      setCurrent("0");
      setPrevious(null);
      setOperator(null);
      setOverwrite(false);
    }
  };

 return (
  <div
    className={`min-h-screen ${styles.bg} transition-colors duration-300 flex items-center justify-center py-8`}
  >
    <div className="w-full max-w-[540px] px-6">
      <Header />
      <Display value={current} />
      <Keypad onPress={handlePress} />
    </div>
  </div>
);
}

export default function App() {
  return (
    <ThemeProvider>
      <CalculatorInner />
    </ThemeProvider>
  );
}