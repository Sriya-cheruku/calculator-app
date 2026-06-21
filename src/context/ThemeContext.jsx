import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const themes = {
  1: {
    bg: "bg-t1-mainBg",
    text: "text-t1-text",
    screen: "bg-t1-screenBg text-t1-text",
    toggleBg: "bg-t1-toggleBg",
    keypadBg: "bg-t1-toggleBg",
    numKey:
      "bg-t1-numBg text-t1-numText shadow-[inset_0_-4px_0_0] shadow-t1-numShadow hover:brightness-110",
    fnKey:
      "bg-t1-keyBg text-t1-text shadow-[inset_0_-4px_0_0] shadow-t1-keyShadow hover:brightness-110",
    accentKey:
      "bg-t1-accent text-t1-text shadow-[inset_0_-4px_0_0] shadow-t1-accentShadow hover:brightness-110",
    toggleThumb: "bg-t1-accent",
  },
  2: {
    bg: "bg-t2-mainBg",
    text: "text-t2-numText",
    screen: "bg-t2-screenBg text-t2-numText",
    toggleBg: "bg-t2-toggleBg",
    keypadBg: "bg-t2-toggleBg",
    numKey:
      "bg-t2-numBg text-t2-numText shadow-[inset_0_-4px_0_0] shadow-t2-numShadow hover:brightness-105",
    fnKey:
      "bg-t2-keyBg text-t2-text shadow-[inset_0_-4px_0_0] shadow-t2-keyShadow hover:brightness-110",
    accentKey:
      "bg-t2-accent text-t2-text shadow-[inset_0_-4px_0_0] shadow-t2-accentShadow hover:brightness-110",
    toggleThumb: "bg-t2-accent",
  },
  3: {
    bg: "bg-t3-mainBg",
    text: "text-t3-numText",
    screen: "bg-t3-screenBg text-t3-numText",
    toggleBg: "bg-t3-toggleBg",
    keypadBg: "bg-t3-toggleBg",
    numKey:
      "bg-t3-numBg text-t3-numText shadow-[inset_0_-4px_0_0] shadow-t3-numShadow hover:brightness-125",
    fnKey:
      "bg-t3-keyBg text-t3-text shadow-[inset_0_-4px_0_0] shadow-t3-keyShadow hover:brightness-125",
    accentKey:
      "bg-t3-accent text-t3-equalsText shadow-[inset_0_-4px_0_0] shadow-t3-accentShadow hover:brightness-110",
    toggleThumb: "bg-t3-accent",
  },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("calc-theme");
    if (saved) return Number(saved);
    if (window.matchMedia?.("(prefers-color-scheme: light)").matches) return 2;
    return 1;
  });

  useEffect(() => {
    localStorage.setItem("calc-theme", String(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, styles: themes[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);