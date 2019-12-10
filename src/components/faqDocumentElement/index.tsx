import React, { FC } from "react";
import {
  FaqDocumentElementStyle,
  FaqDocumentElementCategoryStyle,
  FaqDocumentElementDescriptionStyle,
  FaqDocumentElementInitialStyle,
  FaqDocumentElementTitleSectionStyle,
  FaqDocumentElementTitleStyle
} from "./style";
import { Faq } from "../faqDocumentGroup/types";

export const FaqDocumentElement: FC<{ faq: Faq }> = props => {
  const { category, description, id, title } = props.faq;
  return (
    <FaqDocumentElementStyle key={id}>
      <FaqDocumentElementTitleSectionStyle>
        <FaqDocumentElementInitialStyle>Q.</FaqDocumentElementInitialStyle>
        <FaqDocumentElementCategoryStyle>
          [{category}]
        </FaqDocumentElementCategoryStyle>
        <FaqDocumentElementTitleStyle>{title}</FaqDocumentElementTitleStyle>
      </FaqDocumentElementTitleSectionStyle>
      <FaqDocumentElementDescriptionStyle
        dangerouslySetInnerHTML={{ __html: description }}
      ></FaqDocumentElementDescriptionStyle>
    </FaqDocumentElementStyle>
  );
};
