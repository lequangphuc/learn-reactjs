import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

FilterForm.propTypes = {
  onSubmit: PropTypes.func,
};

FilterForm.defaultProps = {
  onSubmit: null,
};

function FilterForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(value);

    if (!onSubmit) return;

    // debounce
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };
      onSubmit(formValues);
    }, 300);
  }

  return (
    <form action="">
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
    </form>
  );
}

export default FilterForm;
