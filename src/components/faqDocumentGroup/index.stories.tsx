import React from "react";
import { FaqDocumentGroup } from "./index";
import { faqs } from "./types";

export default {
  component: FaqDocumentGroup,
  title: "FaqDocumentGroup"
};

export const FaqDocumentGroupStoryBook = () => {
  return <FaqDocumentGroup faqs={faqs} />;
};

FaqDocumentGroupStoryBook.story = {
  name: "FaqDocumentGroup Component"
};
