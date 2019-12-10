import styled from "styled-components";
import { colors } from "../../common/color";

export const FaqDocumentElementStyle = styled.div`
  border-bottom: 1px dashed ${colors.GRAY_255};
`;
export const FaqDocumentElementInitialStyle = styled.span`
  color: ${colors.TREVARI_ORANGE};
  float: left;
  font-weight: bold;
  margin-right: 15px;
  width: 20px;
`;
export const FaqDocumentElementCategoryStyle = styled.span`
  float: left;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  width: 80px;
`;
export const FaqDocumentElementTitleStyle = styled.div`
  float: left;
`;
export const FaqDocumentElementTitleSectionStyle = styled.div`
  overflow: hidden;
  padding: 15px 10px;
  border-bottom: 1px dashed ${colors.GRAY_255};
`;
export const FaqDocumentElementDescriptionStyle = styled.div`
  padding: 20px 20px 40px 125px;
`;
