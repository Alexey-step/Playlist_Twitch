import React from "react";
import PreviewList from "../preview-list/preview-list";
import {useSelector} from "react-redux";
import FavoritesEmpty from "../favorites-empty/favorites-empty";
import {Link} from "react-router-dom";

import "./favorites.scss";

const Favorites = () => {

  const {favorites} = useSelector((state) => state);

  return (
    <section className="favorites">
      <div className="favorites__wrapper">
        {
          favorites.length ?
          <PreviewList videos={favorites}/>
           : <FavoritesEmpty/>
        }
        <Link to="/" className="favorites__link">Back to main</Link>
      </div>
    </section>
  )
}

export default Favorites;
