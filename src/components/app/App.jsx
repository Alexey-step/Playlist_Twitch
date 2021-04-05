import React, {useEffect} from "react";
import Main from "../main/main"
import Favorites from "../favorites/favorites";
import {Switch, Route} from "react-router-dom";
import * as ActionCreator from "../../store/action-creators";
import {useSelector, useDispatch} from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const {favorites} = useSelector((state) => state);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('items'));
    if (favorites) {
      favorites.forEach((favorite) => dispatch(ActionCreator.setFavorite(favorite)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/favorites" exact>
        <Favorites />
      </Route>
    </Switch>
  );
}

export default App;
