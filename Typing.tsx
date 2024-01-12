import React from 'react'
import { TypeAnimation } from "react-type-animation";


type Props = {}

const Typing = (props: Props) => {
  return (
    <div className="text-sky-500  text-3xs text-sm: Small text-md: Medium text-lg: Large  flex items-center justify-center font-bold h-screen">
      <TypeAnimation
        sequence={[
          "I need a Job",
          1000,
          "I need a money",
          1000,
          "I need a macraren",
          1000,
          "I need a food",
          1000,
          "I need a Happiness",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "3em", display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
}

export default Typing