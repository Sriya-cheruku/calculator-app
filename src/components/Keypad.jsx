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
      "rounded-md font-bold h-[64px] transition active:translate-y-[2px] active:shadow-none flex items-center justify-center";
    if (type === "num") return `${base} text-[40px] ${styles.numKey}`;
    return `${base} text-[28px] uppercase ${styles.fnKey}`;
  };

  return (
    <div className={`${styles.keypadBg} rounded-lg p-6`}>
      <div className="grid grid-cols-4 gap-[14px] mb-[14px]">
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
      <div className="grid grid-cols-2 gap-[14px]">
        <button
          onClick={() => onPress("RESET")}
          className={`rounded-md font-bold text-[28px] uppercase h-[64px] transition active:translate-y-[2px] active:shadow-none ${styles.fnKey}`}
        >
          Reset
        </button>
        <button
          onClick={() => onPress("=")}
          className={`rounded-md font-bold text-[32px] h-[64px] transition active:translate-y-[2px] active:shadow-none ${styles.accentKey}`}
        >
          =
        </button>
      </div>
    </div>
  );
}