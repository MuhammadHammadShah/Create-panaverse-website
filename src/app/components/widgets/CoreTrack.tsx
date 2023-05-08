import React from "react";
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";
import Boxes from "../shared/Boxes";
const some_words = "Core Courses \n (Common in All Specializations):";
const CoreTrack = () => {
  return (
    <section className="  mt-16 lg:mt-28">
      <Wrapper>
        {/* content */}
        <div className=" max-w-screen-sm">
          <h4 className="text-teal-800 font-semibold text-lg mt-4">
            PROGRAM OF STUDIES
          </h4>
          <h2
            className={"text-4xl font-bold text-gray-900 whitespace-pre-line"}
          >
            {some_words}
          </h2>
          <p className="mt-3 text-xl text-slate-600">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <div className=" mt-5">
            <Button text="Learn More" />
          </div>
        </div>
        {/* Boxes */}
        <div className="my-20 flex flex-col md:flex-row gap-x-8 gap-y-6">
          <Boxes
            text_h4="Quarter I"
            text2_p="CS-101: Object-Oriented Programming using TypeScript"
            text3_span="1"
          />
          <Boxes
            text_h4="Quarter II"
            text2_p="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
            text3_span="2"
          />
          <Boxes
            text_h4="Quarter III"
            text2_p="$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development"
            text3_span="3"
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTrack;
