import { useState } from "react";
export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleDark = () => {
    setDarkMode(!darkMode);
    handleTheme();
  };
  return (
    <>
      <section className="bg-gradient flex h-[100px] xl:h-[200px] w-full items-center justify-between px-10">
        <h1 className="text-bannerMobile xl:text-banner font-bold text-white">
          Release Notes
        </h1>
      </section>
    </>
  );
};
