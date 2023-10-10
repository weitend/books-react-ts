import { Outlet } from "react-router-dom";
import { SearchBook } from "./components/search-book";
import "@mantine/core/styles.css";

export default function App() {
  return (
    <>
      <SearchBook />
      <Outlet />
    </>
  );
}
