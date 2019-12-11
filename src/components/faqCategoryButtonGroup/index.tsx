import React, { FC, useState, useEffect } from "react";
import { FaqCategoryButtonGroupStyle, FaqCategoryButtonStyle } from "./style";
import { useFaqDispatch } from "../../context/faq";
import { fetchFaqs } from "../../common/fetchFaqs";

export const FaqCategoryButtonGroup: FC = () => {
  const [currentCategory, setCategory] = useState("독서모임");
  const dispatch = useFaqDispatch();

  const getFaq = async () => {
    const fetchedFaqs = await fetchFaqs();
    dispatch({ type: "BATCH_APPEND", faqs: fetchedFaqs });
    dispatch({ type: "CATEGORY", category: currentCategory });
  };

  useEffect(() => {
    dispatch({ type: "CLEAR" });
    getFaq();
  }, [currentCategory]);

  return (
    <FaqCategoryButtonGroupStyle>
      <FaqCategoryButtonStyle
        onClick={() => {
          setCategory("독서모임");
        }}
      >
        독서모임
      </FaqCategoryButtonStyle>
      <FaqCategoryButtonStyle
        onClick={() => {
          setCategory("신청");
        }}
      >
        신청
      </FaqCategoryButtonStyle>
      <FaqCategoryButtonStyle
        onClick={() => {
          setCategory("환불/이동");
        }}
      >
        환불/이동
      </FaqCategoryButtonStyle>
      <FaqCategoryButtonStyle
        onClick={() => {
          setCategory("독후감");
        }}
      >
        독후감
      </FaqCategoryButtonStyle>
      <FaqCategoryButtonStyle
        onClick={() => {
          setCategory("놀러가기");
        }}
      >
        놀러가기
      </FaqCategoryButtonStyle>
      <FaqCategoryButtonStyle
        onClick={() => {
          setCategory("이벤트");
        }}
      >
        이벤트
      </FaqCategoryButtonStyle>
      <FaqCategoryButtonStyle
        onClick={() => {
          setCategory("아지트");
        }}
      >
        아지트
      </FaqCategoryButtonStyle>
    </FaqCategoryButtonGroupStyle>
  );
};
