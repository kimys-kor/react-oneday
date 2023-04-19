import React, { useState, useEffect, ChangeEvent, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "@statics/images/search/searchicon.svg";

interface SearchInputProps {
  width: string;
  height: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ width, height }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const sendSearch = () => {
    console.log(searchTerm);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <InputContainer width={width} height={height}>
      <Input
        type="text"
        placeholder="검색어 입력"
        onChange={handleInputChange}
        ref={inputRef}
      />
      <Iconbox onClick={sendSearch}>
        <SearchIcon></SearchIcon>
      </Iconbox>
    </InputContainer>
  );
};

export default SearchInput;

const InputContainer = styled.div<{ width: string; height: string }>`
  /* margin-left: 50px; */
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  display: flex;
  align-items: center; /* center vertically */
  justify-content: center; /* center horizontally */

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 1px solid #bbbbcf;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;

  &:focus {
    border-color: #ff6622;
    outline: none;
  }
`;

const Iconbox = styled.div`
  position: absolute;
  right: 20px;

  cursor: pointer;
`;
