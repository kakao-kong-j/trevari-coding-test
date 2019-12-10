import styled from "styled-components";
import { PrimaryButtonStyle } from "../primaryButton/style";

export const FaqDocumentSearchSectionStyle = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;
export const FaqDocumentSearchInputStyle = styled.input`
  height: 40px;
  padding: 0px;
  margin-left: -1px;
`;
export const FaqDocumentSearchButtonStyle = styled(PrimaryButtonStyle)`
  height: 44px;
  width: 60px;
  padding: 0px;
  margin: 0px;
  margin-left: -1px;
  border: 0px solid transparent;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-radius: 0.15rem;
`;
export const FaqDocumentSearchSelectBoxStyle = styled.select`
  height: 44px;
  margin: 0px;
  color: #4e4e4e;
  background-color: #fff;
  border-color: #ced4da;
  outline: 0;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.25);
  min-width: 100px;
`;
