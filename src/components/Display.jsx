import { useTheme } from "../context/ThemeContext";

function formatNumber(value) {
  if (value === "" || value === "-") return value || "0";
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
      className={`${styles.screen} rounded-xl px-6 md:px-8 py-8 md:py-10 mb-6 md:mb-8 flex justify-end items-center min-h-[110px] md:min-h-[140px]`}
    >
      <span className="text-[40px] md:text-[56px] font-bold truncate leading-none">
        {formatNumber(value)}
      </span>
    </div>
  );
}