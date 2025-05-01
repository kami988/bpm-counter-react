"use client";

import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

// Methodコンポーネントを作成
const Method = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex items-start space-x-2">
      <span className="min-w-2 h-2 mt-1 rounded-full bg-muted-foreground"></span>
      <p className="text-sm text-muted-foreground whitespace-pre-wrap">
        {children}
      </p>
    </li>
  );
};

const Usage = () => {
  const { t } = useTranslation();
  return (
    <Accordion
      className="flex flex-col mx-auto w-full max-w-lg space-y-4"
      type="single"
      collapsible
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>{t("usage")}</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2">
            <Method>{t("usage1")}</Method>
            <Method>{t("usage2")}</Method>
            <Method>{t("usage3")}</Method>
            <Method>{t("usage4")}</Method>
            <Method>{t("usage5")}</Method>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Usage;
