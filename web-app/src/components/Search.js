import React from "react";
import styled from "styled-components";
import NavMenu from "./NavMenu";
import { useFeeds } from "../hooks/useFeeds";

const Input = styled.input`
  width: 180px;
  height: fit-content;
  padding: 12px 48px 12px 24px;
  background: #eeeded;
  border: none;
  border-radius: 50px;
  font-size: 18px;

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;

const ActionsWrapper = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const SearchInput = () => {
  const { getFeeds } = useFeeds();
  const handleChangeFeed = (e) => {
    getFeeds("", `${e.target.value}`);
  };
  return (
    <ActionsWrapper>
      <NavMenu />
      <Input placeholder="Search" onChange={handleChangeFeed} />
    </ActionsWrapper>
  );
};

export default SearchInput;
