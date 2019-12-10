import React, { FC } from "react";
import { FaqCategoryButtonGroupStyle, FaqCategoryButtonStyle } from "./style";

export const FaqCategoryButtonGroup: FC = () => {
  return (
    <FaqCategoryButtonGroupStyle>
      <FaqCategoryButtonStyle>독서모임</FaqCategoryButtonStyle>
      <FaqCategoryButtonStyle>신청</FaqCategoryButtonStyle>
      <FaqCategoryButtonStyle>환불/이동</FaqCategoryButtonStyle>
      <FaqCategoryButtonStyle>독후감</FaqCategoryButtonStyle>
      <FaqCategoryButtonStyle>놀러가기</FaqCategoryButtonStyle>
      <FaqCategoryButtonStyle>이벤트</FaqCategoryButtonStyle>
      <FaqCategoryButtonStyle>아지트</FaqCategoryButtonStyle>
    </FaqCategoryButtonGroupStyle>
  );
};
