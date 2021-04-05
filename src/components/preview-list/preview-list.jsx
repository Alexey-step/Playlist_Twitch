import React from "react";
import PreviewItem from "../preview-item/preview-item"

import "./preview-list.scss";

const PreviewList = ({videos}) => {

  return (
    <ul className="preview__list">
      {
        videos.length > 0 ? videos.map((video) =>
          <PreviewItem key={video.id} video={video}/>
        ) : ``
      }
    </ul>
  )
}

export default PreviewList;
