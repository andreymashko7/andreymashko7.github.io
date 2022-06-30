import React from "react";
import cls from "./MyInput.module.css";

const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} className={cls.myInput} />;
});

export default MyInput;
