import React, { FC } from "react";
import {
  FaqDocumentSearchSelectBoxStyle,
  FaqDocumentSearchInputStyle,
  FaqDocumentSearchSectionStyle,
  FaqDocumentSearchButtonStyle
} from "./style";
import { useInput } from "../../hook/useInput";

export const FaqDocumentSearchSection: FC = () => {
  const input = useInput("");
  return (
    <FaqDocumentSearchSectionStyle>
      <FaqDocumentSearchSelectBoxStyle>
        <option>{"제목&내용"}</option>
        <option>제목</option>
        <option>내용</option>
      </FaqDocumentSearchSelectBoxStyle>
      <FaqDocumentSearchInputStyle {...input}></FaqDocumentSearchInputStyle>
      <FaqDocumentSearchButtonStyle>검색</FaqDocumentSearchButtonStyle>
    </FaqDocumentSearchSectionStyle>
  );
};
