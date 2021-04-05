
export const adaptToClient = (item) => {
  const adaptedData = {
    ...item,
    id: item._id,
  }

  delete adaptedData._id
  return adaptedData;
}

export const adaptDataToClient = (item) => {
  const adaptedData = {
    name: item.broadcaster_login,
    channelId: item.id
  }

  delete adaptedData.broadcaster_login
  delete adaptedData.id
  return adaptedData;
}

