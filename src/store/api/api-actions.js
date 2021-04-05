import * as ActionCreator from "../action-creators";
import {adaptToClient, adaptDataToClient} from "../../common";
import {Status} from "../../const";

export const fetchData = (value) => (dispatch, _getState, api) => {
  api.get(`/helix/search/channels?query=${value}`)
    .then(({data: {data}}) => dispatch(ActionCreator.setData(data.map(adaptDataToClient))))
    .catch(() => dispatch(ActionCreator.setIsLoading(Status.ERROR)))
}

export const fetchVideos = (id, offset = 0) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setIsLoading(Status.LOAD))
  api.get(`/kraken/channels/${id}/videos?limit=12&offset=${offset}`)
    .then(({data: {videos, _total}}) => {
      dispatch(ActionCreator.setVideos(videos.map(adaptToClient)))
      dispatch(ActionCreator.setTotal(_total))
      dispatch(ActionCreator.setIsLoading(Status.LOADED))
    })
    .catch(() => dispatch(ActionCreator.setIsLoading(Status.ERROR)))
}
