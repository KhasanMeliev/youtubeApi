import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #212121;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SearchBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const Input = styled.input`
  width: 300px;
  height: 33px;
  background-color: white;
  border: 2px solid #fff;
  border-radius: 5px;
  text-indent: 5px;
  outline: none;
  font-size: 15px;
`;
export const Button = styled.button`
  width: 180px;
  height: 38px;
  background-color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
`;
