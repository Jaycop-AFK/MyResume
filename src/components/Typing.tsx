import React from "react";
import { TypeAnimation } from "react-type-animation";

type Props = {};

const Typing = (props: Props) => {
  return (
    <div className="text-sky-500  text-3xs text-sm: Small text-md: Medium text-lg: Large  flex items-center justify-center font-bold h-screen">
      <TypeAnimation
        sequence={[
          "Hello!",
          1000,
          "Welcome to",
          1000,
          "My resume",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "3em", display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default Typing;
