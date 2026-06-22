import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const { styles } = useTheme();
  return (
    <header className="flex items-end justify-between mb-6 px-1">
      <h1 className={`text-[32px] font-bold ${styles.text} leading-none`}>
        calc
      </h1>
      <ThemeToggle />
    </header>
  );
}