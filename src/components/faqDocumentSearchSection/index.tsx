import React, { FC, useEffect, useState } from "react";
import {
  FaqDocumentSearchSelectBoxStyle,
  FaqDocumentSearchInputStyle,
  FaqDocumentSearchSectionStyle,
  FaqDocumentSearchButtonStyle
} from "./style";
import { useInput } from "../../hook/useInput";
import { useFaqDispatch } from "../../context/faq";
import { fetchFaqs } from "../../common/fetchFaqs";

export const FaqDocumentSearchSection: FC = () => {
  const input = useInput("");
  const [currentOption, setOption] = useState("제목&내용");
  const [currentInput, setInput] = useState("");

  const dispatch = useFaqDispatch();

  const getFaq = async () => {
    const fetchedFaqs = await fetchFaqs();
    dispatch({ type: "BATCH_APPEND", faqs: fetchedFaqs });
    dispatch({ type: "SEARCH", text: input.value, option: currentOption });
  };

  useEffect(() => {
    dispatch({ type: "CLEAR" });
    getFaq();
  }, [currentInput, currentOption]);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value);
  };

  const onClick = () => {
    setInput(input.value);
  };

  return (
    <FaqDocumentSearchSectionStyle>
      <FaqDocumentSearchSelectBoxStyle onChange={onChange}>
        <option value="제목&내용">{"제목&내용"}</option>
        <option value="제목">제목</option>
        <option value="내용">내용</option>
      </FaqDocumentSearchSelectBoxStyle>
      <FaqDocumentSearchInputStyle {...input}></FaqDocumentSearchInputStyle>
      <FaqDocumentSearchButtonStyle onClick={onClick}>
        검색
      </FaqDocumentSearchButtonStyle>
    </FaqDocumentSearchSectionStyle>
  );
};
