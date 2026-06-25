import { useTheme } from "../context/ThemeContext";

function formatNumber(value) {
  if (value === "" || value === "-") return value;
  if (value === "Error") return value;
  const [intPart, decPart] = String(value).split(".");
  const sign = intPart.startsWith("-") ? "-" : "";
  const abs = sign ? intPart.slice(1) : intPart;
  const withCommas = abs.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return sign + withCommas + (decPart !== undefined ? "." + decPart : "");
}

export default function Display({ value }) {
  const { styles } = useTheme();
  return (
    <div
      className={`${styles.screen} rounded-lg px-6 py-8 mb-6 flex justify-end items-center min-h-[88px] md:min-h-[128px]`}
    >
      <span className="text-4xl md:text-5xl font-bold truncate">
        {formatNumber(value)}
      </span>
    </div>
  );
}