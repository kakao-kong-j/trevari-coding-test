import React from "react";
import { SearchInput } from "./index";

export default {
  component: SearchInput,
  title: "SearchInput"
};

export const SearchInputStoryBook = () => {
  return <SearchInput placeholder="클럽명 검색" buttonValue="검색" />;
};

SearchInputStoryBook.story = {
  name: "SearchInput Component"
};
