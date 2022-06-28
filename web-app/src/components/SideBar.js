import styled, { css } from "styled-components";
import { useFeeds } from "../hooks/useFeeds";

const SideBarWrapper = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
  ${({ isShow }) => {
    return css`
      width: ${isShow ? "250px" : "0px"};
    `;
  }}
`;

const Menu = styled.a`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 18px;
  color: #818181;
  display: block;
  transition: 0.3s;
  &:hover {
    color: #f1f1f1;
  }
`;

const WrapperCloseBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const ButtonClose = styled.div`
  width: 25px;
  height: 25px;
  color: white;
  font-size: 25px;
  &:after {
    content: "x";
  }
`;

const SideBar = ({ isShow, onClick }) => {
  const { getFeeds } = useFeeds();
  const handleChangeFeed = (feed) => {
    getFeeds(feed);
  };
  return (
    <SideBarWrapper isShow={isShow}>
      <WrapperCloseBtn>
        <ButtonClose onClick={onClick} />
      </WrapperCloseBtn>
      <Menu onClick={() => handleChangeFeed("/feeds?topic=news")}>News</Menu>
      <Menu onClick={() => handleChangeFeed("/feeds?topic=regions")}>
        Regions
      </Menu>
      <Menu onClick={() => handleChangeFeed("/feeds?topic=video")}>Video</Menu>
      <Menu onClick={() => handleChangeFeed("/feeds?topic=tv")}>TV</Menu>
    </SideBarWrapper>
  );
};

export default SideBar;
