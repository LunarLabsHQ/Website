import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IconCloudDemo } from "./design-preview";

export const WhatWeOffer = () => {
  const [activeItem, setActiveItem] = useState<string>("design");
  return (
    <div className="h-screen w-full p-10">
      <div className="ml-48 ">
        <div className="text-3xl underline italic">What we offer</div>
        <div className="text-6xl font-bold mt-5">
          Ship your ideas into orbit.
        </div>

        <div className="  ">
          <div className="grid grid-cols-2 items-center  gap-10 ">
            <div>
              <Accordion type="single" collapsible defaultValue="design">
                <AccordionItem value="design" >
                  <AccordionTrigger className="text-4xl" onClick={()=>setActiveItem("design")}>design</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="development">
                  <AccordionTrigger  className="text-4xl" onClick={()=>setActiveItem("development")}>development</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="mvp">
                  <AccordionTrigger  className="text-4xl" onClick={()=>setActiveItem("mvp")}>MVP</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="flex justify-center">{
                activeItem === "design" ? <IconCloudDemo /> : activeItem === "development" ? <IconCloudDemo /> : <IconCloudDemo />
                }</div>
          </div>
        </div>
      </div>
    </div>
  );
};
