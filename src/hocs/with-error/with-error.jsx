import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Error from "../../components/error/error";
import {ERROR_TIMEOUT, Status} from "../../const";
import * as ActionCreator from "../../store/action-creators";

const withError = (Component) => {
  const WithError = (props) => {
    const dispatch = useDispatch();
    const {isLoading} = useSelector((state) => state);

    useEffect(() => {
      if (isLoading === Status.ERROR) {
        setTimeout(() => dispatch(ActionCreator.setIsLoading(Status.PENDING)), ERROR_TIMEOUT);
      }
    }, [dispatch, isLoading]);

    return (
      <>
        {
          isLoading === Status.ERROR ? <Error/> : ``
        }
        <Component {...props}/>
      </>
    );
  };

  return WithError;
};

export default withError;
