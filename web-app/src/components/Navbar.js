import { useState } from "react";
import styled from "styled-components";
import BaseContainer from "./Container";
import SearchInput from "./Search";
import SideBar from "./SideBar";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Container = styled(BaseContainer)`
  display: flex;
  align-items: center;
  height: 75px;
`;

const NavLogo = styled.img`
  width: 75px;
  object-fit: contain;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HamburgerButton = styled.img`
  width: 75px;
  object-fit: contain;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Navbar = () => {
  const [isShowSideBar, setShowSideBar] = useState(false);

  const handleOnClickHamburger = () => setShowSideBar(!isShowSideBar);

  return (
    <Wrapper>
      <SideBar isShow={isShowSideBar} onClick={handleOnClickHamburger} />
      <Container>
        <HamburgerButton
          onClick={handleOnClickHamburger}
          src={"/assets/hamburger_btn.jpg"}
          alt={"hamburger_button"}
        />
        <NavLogo src={"/assets/logo.png"} alt={"logo"} />
        <SearchInput />
      </Container>
    </Wrapper>
  );
};

export default Navbar;
