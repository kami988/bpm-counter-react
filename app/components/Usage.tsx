"use client";

import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

// Methodコンポーネントを作成
const Method = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => {
  return (
    <li className="flex items-start space-x-2">
      <span className="text-sm font-bold text-muted-foreground">{index}.</span>
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
          <ol className="space-y-2">
            <Method index={1}>{t("usage1")}</Method>
            <Method index={2}>{t("usage2")}</Method>
            <Method index={3}>{t("usage3")}</Method>
            <Method index={4}>{t("usage4")}</Method>
            <Method index={5}>{t("usage5")}</Method>
          </ol>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Usage;
