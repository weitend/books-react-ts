import { Box, TextInput } from "@mantine/core";
import { useState } from "react";
// import { SearchInput } from "../search-input";

export function SearchBook() {
  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (e) => {
    setInputValue(e);
  };

  return (
    <Box>
      <form action="">
        <TextInput value={inputValue} onChange={handleChangeInput} />
      </form>
    </Box>
  );
}
