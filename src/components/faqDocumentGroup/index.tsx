import React, { FC } from "react";
import { FaqDocumentGroupStyle } from "./style";
import { Faq } from "./types";
import { FaqDocumentElement } from "../faqDocumentElement";

export const FaqDocumentGroup: FC<{ faqs: Faq[] }> = props => {
  const { faqs } = props;
  return (
    <FaqDocumentGroupStyle>
      {faqs.map(faq => (
        <FaqDocumentElement faq={faq} />
      ))}
    </FaqDocumentGroupStyle>
  );
};
