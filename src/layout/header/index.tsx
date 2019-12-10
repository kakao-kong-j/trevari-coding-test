import React from "react";
import Logo from "../../components/logo";
import { HeaderStyle } from "./style";
import { ServiceNavigator } from "../../components/serviceNavigator";
import { Category } from "../../components/serviceNavigator/types";
import { colors } from "../../common/color";

const CATEGORYS: Category[] = [
  { name: "트레바리 알아보기", uri: "/" },
  { name: "멤버십 신청", uri: "/", isOpen: true },
  { name: "독서 모임", uri: "/meetings" },
  { name: "이벤트", uri: "/" },
  { name: "채용공고", uri: "/" },
  { name: "마이페이지", uri: "/" },
  { name: "로그아웃", uri: "/" }
];

export const Header = () => {
  return (
    <div style={{ borderBottom: `1px solid ${colors.GRAY_255}` }}>
      <HeaderStyle>
        <Logo />
        <ServiceNavigator categorys={CATEGORYS} />
      </HeaderStyle>
    </div>
  );
};
export default Header;
