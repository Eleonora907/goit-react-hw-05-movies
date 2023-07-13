import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchFormButton,
  SearchFormContainer,
  SearchFormInput,
} from './MoviesSearchForm.styled';

const MoviesSearchFrom = ({ handleSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    handleSubmit(value);
    setValue('');
  };

  return (
    <SearchFormContainer onSubmit={handleFormSubmit}>
      <SearchFormInput type="text" value={value} onChange={handleChange} />
      <SearchFormButton type="submit">Search</SearchFormButton>
    </SearchFormContainer>
  );
};

MoviesSearchFrom.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default MoviesSearchFrom;
