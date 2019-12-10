import React, { useState } from "react";

export const useInput = (initalValue: string) => {
  const [value, setValue] = useState(initalValue);

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value }
    } = event;
    setValue(value);
  };
  return { value, onChange };
};
