import * as ActionType from "./actions";
import {createAction} from "@reduxjs/toolkit";

export const setData = createAction(ActionType.SET_DATA, (data) => {
  return {
    payload: data
  }
})

export const setChannelId = createAction(ActionType.SET_CHANNEL_ID, (id) => {
  return {
    payload: id
  }
})


export const setVideos = createAction(ActionType.SET_VIDEOS, (data) => {
  return {
    payload: data
  }
})

export const setFavorite = createAction(ActionType.SET_FAVORITE, (data) => {
  return {
    payload: data
  }
})

export const setTotal = createAction(ActionType.SET_TOTAL, (data) => {
  return {
    payload: data
  }
})

export const setIsLoading = createAction(ActionType.SET_IS_LOADING, (isLoading) => {
  return {
    payload: isLoading
  }
})
