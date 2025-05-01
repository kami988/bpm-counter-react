import { Languages } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { t, i18n } = useTranslation();

  const onChangeLanguage = async () => {
    const nowLng = i18n.language; // 現在の言語を取得
    await i18n.changeLanguage(nowLng === "ja" ? "en" : "ja");
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Languages className="text-black dark:text-white" />
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col p-2 gap-2">
          <button
            className={
              i18n.language === "ja"
                ? "text-black dark:text-white"
                : "text-gray-500"
            }
            onClick={() => onChangeLanguage()}
          >
            {t("ja")}
          </button>
          <button
            className={
              i18n.language === "en"
                ? "text-black dark:text-white"
                : "text-gray-500"
            }
            onClick={() => onChangeLanguage()}
          >
            {t("en")}
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
