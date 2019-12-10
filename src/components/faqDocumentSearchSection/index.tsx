import React, { FC } from "react";
import {
  FaqDocumentSearchSelectBoxStyle,
  FaqDocumentSearchInputStyle,
  FaqDocumentSearchSectionStyle,
  FaqDocumentSearchButtonStyle
} from "./style";

export const FaqDocumentSearchSection: FC = props => {
  return (
    <FaqDocumentSearchSectionStyle>
      <FaqDocumentSearchSelectBoxStyle>
        <option>{"제목&내용"}</option>
        <option>제목</option>
        <option>내용</option>
      </FaqDocumentSearchSelectBoxStyle>
      <FaqDocumentSearchInputStyle></FaqDocumentSearchInputStyle>
      <FaqDocumentSearchButtonStyle>검색</FaqDocumentSearchButtonStyle>
    </FaqDocumentSearchSectionStyle>
  );
};
