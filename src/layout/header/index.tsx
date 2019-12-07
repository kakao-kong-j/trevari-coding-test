import React from "react";
import Logo from "../../components/logo";
import { HeaderStyle } from "./style";
import { ServiceNavigator } from "../../components/serviceNavigator";
import { Category } from "../../components/serviceNavigator/types";

const CATEGORYS: Category[] = [
  { name: "트레바리 알아보기", uri: "/." },
  { name: "맴버쉽 신청", uri: "/.", isOpen: true },
  { name: "독서 모임", uri: "/." },
  { name: "이벤트", uri: "/." },
  { name: "채용공고", uri: "/." },
  { name: "마이페이지", uri: "/." },
  { name: "로그아웃", uri: "/." }
];

export const Header = () => {
  return (
    <HeaderStyle>
      <Logo />
      <ServiceNavigator categorys={CATEGORYS} />
    </HeaderStyle>
  );
};
export default Header;
