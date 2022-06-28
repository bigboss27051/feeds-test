import styled from "styled-components";
import { useFeeds } from '../hooks/useFeeds'

const MenuWrapper = styled.ul`
  position: relative;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
	@media screen and (max-width: 768px) {
    display: none;
  }
`;
const Menu = styled.li`
  float: left;
  padding: 10px;
  &:hover {
    color: #6A6A6A;
  }
`;

const NavMenu = () => {
  const { getFeeds } = useFeeds();
  const handleChangeFeed = (feed) => {
    getFeeds(feed)
  }
  return (
    <MenuWrapper>
      <Menu onClick={() => handleChangeFeed('/feeds?topic=news')}>News</Menu>
      <Menu onClick={() => handleChangeFeed('/feeds?topic=regions')}>Regions</Menu>
      <Menu onClick={() => handleChangeFeed('/feeds?topic=video')}>Video</Menu>
      <Menu onClick={() => handleChangeFeed('/feeds?topic=tv')}>TV</Menu>
    </MenuWrapper>
  );
};

export default NavMenu;
