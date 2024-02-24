"use client";
import { Icon } from "@/components/core/Icon";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className="w-fit hover:scale-110 active:scale-100 duration-700"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <Icon.Moon toolTip="light"/> : <Icon.SunMedium />}
    </button>
  );
};

export default ThemeSwitcher;
