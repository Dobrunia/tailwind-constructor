import React from "react";
import { ComponentsContent } from "./ComponentsContent";
import { Group, components } from "../Data";

type PropsType = {
  content: Group;
};

export const SelectionWindow = React.memo((props: PropsType) => {
    const htmlElements: string[] = [];
    components[props.content]?.forEach((element) => {
        htmlElements.push(element.htmlCode);
        console.log(element.htmlCode);
    });
    
  return (
    <section className="w-[320px] h-[600px] border border-emerald-400 rounded-lg">
      <ComponentsContent htmlCode="" />
    </section>
  );
});
