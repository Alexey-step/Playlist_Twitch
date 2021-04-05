import React from "react";

import "./search-item.scss";

const SearchItem = ({onListItemClick, item}) => {

  return (
    <li key={item.id} onClick={() => onListItemClick(item.name)} className="search__item">{item.name}</li>
  )
}

export default SearchItem;
