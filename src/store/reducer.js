import {createReducer} from "@reduxjs/toolkit";
import * as ActionCreator from "./action-creators";
import {Status} from "../const";

const initialState = {
  data: [],
  channelId: ``,
  videos: [],
  favorites: [],
  total: 0,
  isLoading: Status.PENDING,
}

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionCreator.setData, (state, action) => {
      state.data = action.payload
    })
    .addCase(ActionCreator.setChannelId, (state, action) => {
      state.channelId = action.payload
    })
    .addCase(ActionCreator.setVideos, (state, action) => {
      state.videos = action.payload
    })
    .addCase(ActionCreator.setTotal, (state, action) => {
      state.total = action.payload
    })
    .addCase(ActionCreator.setIsLoading, (state, action) => {
      state.isLoading = action.payload
    })
    .addCase(ActionCreator.setFavorite, (state, action) => {
      const itemInd = state.favorites.findIndex((item) => item.id === action.payload.id)
      itemInd >= 0 ? state.favorites = [
        ...state.favorites.slice(0, itemInd),
        ...state.favorites.slice(itemInd + 1)
      ] : state.favorites = [...state.favorites, action.payload];
    })
})
