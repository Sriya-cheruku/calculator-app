import { useTheme } from "../context/ThemeContext";

function formatNumber(value) {
  if (value === null || value === undefined || value === "") return "0";
  if (value === "Error") return value;
  if (value === "-") return "-";

  const str = String(value);
  const [intPart, decPart] = str.split(".");
  const sign = intPart.startsWith("-") ? "-" : "";
  const abs = sign ? intPart.slice(1) : intPart;
  const withCommas = abs.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return sign + withCommas + (decPart !== undefined ? "." + decPart : "");
}

export default function Display({ value }) {
  const { styles } = useTheme();
  return (
    <div
className={`${styles.screen} rounded-lg px-8 py-8 mb-6 flex justify-end items-center h-[130px]`}    >
      <span className="text-[44px] font-bold truncate leading-none">
        {formatNumber(value)}
      </span>
    </div>
  );
}