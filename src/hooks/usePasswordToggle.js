/** @format */

import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const usePasswordToggle = () => {
  const [visible, setVisible] = useState(false);

  const Icon = visible ? (
    <AiFillEyeInvisible
      className="text-xl text-gray-700"
      onClick={() => setVisible((visible) => !visible)}
    />
  ) : (
    <AiFillEye
      className="text-xl text-gray-700"
      onClick={() => setVisible((visible) => !visible)}
    />
  );

  const InputType = visible ? "text" : "password";
  return [InputType, Icon];
};

export default usePasswordToggle;
