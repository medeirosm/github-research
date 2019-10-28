import React from "react";

import * as Styled from "./styles";

const SearchFilter = ({ list, onChange }) => {
  const filter = e => {
    const keyword = e.target.value.toLowerCase();
    const filteredItems = list.filter(item => {
      const itemInLowerCase = item.toLowerCase();
      return itemInLowerCase.indexOf(keyword) > -1;
    });

    onChange(filteredItems);
  };

  return (
    <>
      <Styled.Input
        label="Filtrar"
        placeholder="Filtrar"
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true
        }}
        fullWidth
        placeholder="Filtro"
        inputProps={{ "aria-label": "Filtro" }}
        onChange={e => filter(e)}
      />
    </>
  );
};

export default SearchFilter;
