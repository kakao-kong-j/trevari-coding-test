import React, { FC, CSSProperties } from "react";
import {
  CustomerServiceNaviTabStyle,
  CustomerServiceNaviTabElementStyle,
  CustomerServiceNaviTabWrapperStyle
} from "./style";
import { colors } from "../../common/color";

const selectedStyle: CSSProperties = {
  borderBottom: `2px solid ${colors.TREVARI_ORANGE}`,
  fontWeight: 700
};

export const CustomerServiceNaviTab: FC = () => {
  return (
    <CustomerServiceNaviTabStyle>
      <CustomerServiceNaviTabWrapperStyle>
        <CustomerServiceNaviTabElementStyle style={selectedStyle}>
          FAQ
        </CustomerServiceNaviTabElementStyle>
        <CustomerServiceNaviTabElementStyle>
          공지사항
        </CustomerServiceNaviTabElementStyle>
      </CustomerServiceNaviTabWrapperStyle>
    </CustomerServiceNaviTabStyle>
  );
};
