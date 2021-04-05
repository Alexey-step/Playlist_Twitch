import React, {useState, useEffect, useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchData, fetchVideos} from "../../store/api/api-actions";
import {setChannelId} from "../../store/action-creators";
import {debounce} from "lodash";
import SearchList from "../search-list/search-list";

import "./search.scss";

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(``);
  const [isOpen, setIsOpen] = useState(false);
  const {data, channelId} = useSelector((state) => state);
  const debounceFetchData = useCallback(debounce(e => dispatch(fetchData(e)), 300), [])

  const handleChange = (evt) => {
    evt.preventDefault();
    setValue(evt.target.value);
    setIsOpen(true);
    if (evt.target.value.length) {
      debounceFetchData(evt.target.value)
    }
  }

  const handleSearch = () => {
    const searchItem = data.find((item) => item.name === value)
    if (searchItem) {
      dispatch(setChannelId(searchItem.channelId))
    }
  }

  const handleList = (item) => {
    setValue(item)
    setIsOpen(false)
  }

  useEffect(() => {
    if (channelId) {
      dispatch(fetchVideos(channelId))
    }
  }, [channelId])

  return (
    <div className="search">
      <label className="search__label" htmlFor="search">Enter channel name</label>
      <div className="search-wrapper">
        <input className="search__field" onChange={handleChange} autoComplete="off" type="search" id="search" value={value}/>
        {
          isOpen && <SearchList data={data} onListItemClick={handleList}/>
        }
      </div>
      <button className="search__btn" onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search;
