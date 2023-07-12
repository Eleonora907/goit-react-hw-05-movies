import styled from 'styled-components';

export const SearchFormContainer = styled.form`
  margin-top: 20px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 400px;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  background-color: #555;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 15px;
`;

export const SearchFormInput = styled.input`
  width: 100%;
  padding: 5px;
  border: none;
  border-radius: 10px;
  background-color: #333;
  color: #fff;
`;
