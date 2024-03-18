import React from "react";

type PropsType = {
  htmlCode: string;
};

export const ComponentsContent = React.memo((props: PropsType) => {
  return <div className="w-full h-max">{props.htmlCode}</div>;
});
