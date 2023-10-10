import { TextInput } from "@mantine/core";
import { useState } from "react";

export function SearchInput() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    console.log(e.currentTarget.value);
    setInputValue(e.currentTarget.value);
  };

  return <TextInput value={inputValue} onChange={handleChange} />;
}
