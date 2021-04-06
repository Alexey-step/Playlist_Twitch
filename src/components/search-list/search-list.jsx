import React from "react";
import SearchItem from "../search-item/search-item";

import "./search-list.scss";

const SearchList = ({onListItemClick, data}) => {

  return (
    <ul className="search__list">
      {
        data.length > 0 ?
        data.map((item) => <SearchItem key={item.channelId} item={item} onListItemClick={onListItemClick} />) : ``
      }
    </ul>
  )
}

export default SearchList;

