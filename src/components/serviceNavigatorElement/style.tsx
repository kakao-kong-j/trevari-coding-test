import styled from "styled-components";
import { colors } from "../../common/color";

export const ServiceNavigatorElementStyle = styled.div`
  font-size: 14px;
  display: inline-block;
  height: 100%;
  padding: 20px 8px;
  box-sizing: border-box;
  list-style-type: none;
  color: ${colors.GRAY};
  :hover {
    color: ${colors.TREVARI_ORANGE};
  }
`;
