import React from "react";
import styled from "styled-components";

const logo: React.FC = () => <Image src={"/logo.jpg"} />;

const Image = styled.img`
  vertical-align: middle;
  border-style: none;
`;

export default logo;
