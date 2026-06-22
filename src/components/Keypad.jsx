import { useTheme } from "../context/ThemeContext";

const keys = [
  { label: "7", type: "num" },
  { label: "8", type: "num" },
  { label: "9", type: "num" },
  { label: "DEL", type: "fn" },
  { label: "4", type: "num" },
  { label: "5", type: "num" },
  { label: "6", type: "num" },
  { label: "+", type: "num" },
  { label: "1", type: "num" },
  { label: "2", type: "num" },
  { label: "3", type: "num" },
  { label: "-", type: "num" },
  { label: ".", type: "num" },
  { label: "0", type: "num" },
  { label: "/", type: "num" },
  { label: "x", type: "num" },
];

export default function Keypad({ onPress }) {
  const { styles } = useTheme();

  const keyClass = (type) => {
    const base =
      "rounded-lg font-bold py-4 md:py-5 transition active:translate-y-[2px] active:shadow-none";
    if (type === "num")
      return `${base} text-3xl md:text-4xl ${styles.numKey}`;
    return `${base} text-xl md:text-2xl uppercase ${styles.fnKey}`;
  };

  return (
    <div className={`${styles.keypadBg} rounded-xl p-5 md:p-8`}>
      <div className="grid grid-cols-4 gap-3 md:gap-6 mb-3 md:mb-6">
        {keys.map((k) => (
          <button
            key={k.label}
            onClick={() => onPress(k.label)}
            className={keyClass(k.type)}
          >
            {k.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 md:gap-6">
        <button
          onClick={() => onPress("RESET")}
          className={`rounded-lg font-bold text-xl md:text-2xl uppercase py-4 md:py-5 transition active:translate-y-[2px] active:shadow-none ${styles.fnKey}`}
        >
          Reset
        </button>
        <button
          onClick={() => onPress("=")}
          className={`rounded-lg font-bold text-xl md:text-2xl py-4 md:py-5 transition active:translate-y-[2px] active:shadow-none ${styles.accentKey}`}
        >
          =
        </button>
      </div>
    </div>
  );
}