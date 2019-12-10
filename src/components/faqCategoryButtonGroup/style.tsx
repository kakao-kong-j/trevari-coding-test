import styled from "styled-components";
import { colors } from "../../common/color";

export const FaqCategoryButtonGroupStyle = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;
export const FaqCategoryButtonStyle = styled.button`
  margin-bottom: 10px;
  margin-right: 10px;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  border: 1px solid ${colors.TREVARI_ORANGE};
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.15rem;
  background-color: ${colors.WHITE};
  color: ${colors.TREVARI_ORANGE};
  :hover {
    background-color: ${colors.TREVARI_ORANGE};
    color: ${colors.BLACK};
  }
  :active {
    background-color: ${colors.TREVARI_ORANGE};
    color: ${colors.WHITE};
  }
`;
