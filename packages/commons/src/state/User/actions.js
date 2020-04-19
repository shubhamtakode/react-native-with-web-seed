import types from "./types";

const updateToken = (token) => ({
  type: types.UPDATE_AUTH_TOKEN,
  payload: token,
})

const sampleFetchCall = (
  payload,
  options,
  queryParams,
  successCallback,
  errorCallback
) => ({
  type: types.SAMPLE_FETCH_CALL_REQUEST,
  payload,
  options,
  queryParams,
  successCallback,
  errorCallback,
});


export default {
  updateToken,
  sampleFetchCall
};
