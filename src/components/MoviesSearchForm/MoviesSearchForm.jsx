import React from 'react';
import PropTypes from 'prop-types';
import {
  SearchFormButton,
  SearchFormContainer,
  SearchFormInput,
} from './MoviesSearchForm.styled';

const MoviesSearchFrom = ({ handleSubmit, value, setValue }) => {
  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    handleSubmit();
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
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default MoviesSearchFrom;
