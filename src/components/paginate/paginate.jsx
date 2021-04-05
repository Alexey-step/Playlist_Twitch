import React from "react";
import ReactPaginate from "react-paginate";
import {useSelector, useDispatch} from "react-redux";
import {fetchVideos} from "../../store/api/api-actions"
import {VIDOES_PER_PAGE} from "../../const";

import "./paginate.scss";

const Paginate = ({pageCount}) => {

  const dispatch = useDispatch()
  const {channelId} = useSelector((state) => state);

  const handlePageClick = (evt) => {
    const offset = VIDOES_PER_PAGE * evt.selected;
    dispatch(fetchVideos(channelId, offset))
  }

  return (
    <>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}/>
    </>
  )
}

export default Paginate;
