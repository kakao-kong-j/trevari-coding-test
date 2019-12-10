import styled from "styled-components";
import { PrimaryButtonStyle } from "../primaryButton/style";
import { colors } from "../../common/color";

export const GroupStyle = styled.div`
  flex-wrap: wrap;
  align-items: stretch;
  position: static;
  margin-left: auto;
  float: right;
`;
export const InputStyle = styled.input`
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.15rem;
  border: 1px solid ${colors.GRAY_255};
`;
export const ButtonStyle = styled(PrimaryButtonStyle)`
  margin-left: -1px;
  font-size: 100%;
  font-weight: 500%;
  margin: 0px;
  padding: 6px 12px;
`;
