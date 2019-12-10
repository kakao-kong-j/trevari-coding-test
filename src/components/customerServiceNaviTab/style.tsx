import styled from "styled-components";

export const CustomerServiceNaviTabStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  justify-content: center;
  margin-bottom: 20px;
`;

export const CustomerServiceNaviTabElementStyle = styled.li`
  float: left;
  width: 100px;
  height: 30px;
  margin-right: 2px;
  font-weight: 400;
  text-align: center;
  border-radius: 3px 3px 0 0;
  list-style-type: none;
  cursor: pointer;
  :hover {
    font-weight: 700;
  }
`;

export const CustomerServiceNaviTabWrapperStyle = styled.ul`
  height: 30px;
`;
