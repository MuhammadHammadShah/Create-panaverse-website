import React, { FC } from "react";

const Boxes: FC<{ text_h4: string; text2_p: string; text3_span: string }> = ({
  text_h4,
  text2_p,
  text3_span,
}) => {
  return (
    <>
      <div className="border rounded-md relative flex-1 px-8 py-9 items">
        <h4 className="font-bold text-lg">{text_h4}</h4>
        <p className="mt-2 text-slate-600 z-0">{text2_p}</p>
        <span className="absolute top-0 right-10 text-gray-200 text-9xl font-bold -z-10">
          {text3_span}
        </span>
      </div>
    </>
  );
};

export default Boxes;
