import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  title: string;
  desc: string;
}
interface Faq {
  data: FaqItem[];
}
export default function Faq({ data }: Faq) {
  return (
    <Accordion type="multiple" className=" space-y-4">
      {data.map((faqItem, i) => (
        <AccordionItem
          value={`item-${i}`}
          className="rounded-2xl bg-white px-6 py-4 text-left shadow"
        >
          <AccordionTrigger>{faqItem.title}</AccordionTrigger>
          <AccordionContent className=" mt-2">{faqItem.desc} </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
