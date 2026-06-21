import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme, styles } = useTheme();

  return (
    <div className="flex items-end gap-5">
      <span className={`uppercase text-xs tracking-widest ${styles.text}`}>
        Theme
      </span>
      <div className="flex flex-col items-center gap-1">
        <div className="flex justify-between w-[71px] px-2 text-xs">
          {[1, 2, 3].map((n) => (
            <span key={n} className={styles.text}>
              {n}
            </span>
          ))}
        </div>
        <div
          className={`relative w-[71px] h-[26px] rounded-full ${styles.toggleBg} flex items-center px-1`}
        >
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              onClick={() => setTheme(n)}
              aria-label={`Theme ${n}`}
              className="flex-1 h-full"
            />
          ))}
          <span
            className={`absolute top-1/2 -translate-y-1/2 w-[18px] h-[18px] rounded-full ${styles.toggleThumb} transition-all duration-200 pointer-events-none`}
            style={{
              left:
                theme === 1
                  ? "4px"
                  : theme === 2
                  ? "calc(50% - 9px)"
                  : "calc(100% - 22px)",
            }}
          />
        </div>
      </div>
    </div>
  );
}