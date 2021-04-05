import React from "react";
import PreviewList from "../preview-list/preview-list"
import {useSelector} from "react-redux";
import Header from "../header/header";
import Paginate from "../paginate/paginate"
import {VIDOES_PER_PAGE, Status} from "../../const";
import Spinner from "../spinner/spinner";
import withError from "../../hocs/with-error/with-error";

import "./main.scss";

const Main = () => {
  const {videos, total, isLoading} = useSelector((state) => state);
  const pageCount = total / VIDOES_PER_PAGE;

  return (
    <>
      <Header />
      <div className="page-main">
        <section className="page-main__preview preview">
          {
            isLoading === Status.LOAD ? <Spinner/> : <PreviewList videos={videos} />
          }
          {
            total <= VIDOES_PER_PAGE ? `` : <Paginate pageCount={pageCount}/>
          }
        </section>
      </div>
    </>
  )
}

export default withError(Main);
