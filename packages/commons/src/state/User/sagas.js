import { all, call, put, takeLatest } from "redux-saga/effects";
import types from "./types";
import userActions from './actions';


function* fetchCitiesFiltered(action) {
    yield put({ type: types.SAMPLE_FETCH_CALL_IN_PROGRESS });
    try {
        const response = yield call(
            (url, option, query, successCallback, errorCallback) => {
                //function to make API calls
            },
            'your api url here',
            action.payload,
            action.queryParams,
            action.successCallback,
            action.errorCallback
        );
        if (response.data) {
            yield put({
                type: types.SAMPLE_FETCH_CALL_SUCCESS,
                payload: response.data,
            });
        }
    } catch (error) {
        yield put({
            type: types.SAMPLE_FETCH_CALL_FAILURE,
            payload: error,
        });
    }
}


export function* watchUser() {
    yield all([
        takeLatest(types.SAMPLE_FETCH_CALL_REQUEST, fetchCitiesFiltered)
    ]);
}
