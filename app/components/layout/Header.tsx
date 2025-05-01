import ThemeButton from "./ThemeButton";
import LanguageToggle from "./LanguageToggle";
import Image from "next/image";

const Header = () => {
  return (
    <header className="shadow-sm border-b">
      <div className="max-w-7xl gap-4 mx-auto px-4 py-4 sm:px-6 flex items-center">
        <Image
          aria-hidden
          src="/images/favicon.svg"
          alt="icon"
          width={24}
          height={24}
        />
        <h1 className="text-xl font-semibold text-accent-foreground">
          BPM Calculator
        </h1>
        <div className="ml-auto flex items-center">
          <LanguageToggle />
        </div>
        <div className="flex items-center">
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
