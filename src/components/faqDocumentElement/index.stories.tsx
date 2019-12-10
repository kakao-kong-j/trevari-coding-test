import React from "react";
import { FaqDocumentElement } from "./index";
import { faqs } from "../faqDocumentGroup/types";

export default {
  component: FaqDocumentElement,
  title: "FaqDocumentElement"
};

export const FaqDocumentElementStoryBook = () => {
  return <FaqDocumentElement faq={faqs[0]} />;
};

FaqDocumentElementStoryBook.story = {
  name: "FaqDocumentElement Component"
};
