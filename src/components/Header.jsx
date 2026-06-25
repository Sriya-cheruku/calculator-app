import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const { styles } = useTheme();
  return (
    <header className="flex items-end justify-between mb-8">
      <h1 className={`text-3xl font-bold ${styles.text}`}>calc</h1>
      <ThemeToggle />
    </header>
  );
}