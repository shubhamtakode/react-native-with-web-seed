import types from "./types";

const initialState = {
    sampleFetchCallData: null,
    isFetching: false,
    isUpdating: false,
    isCreating: false,
    fetchError: null,
    updateError: null,
    createError: null,
    token: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case types.UPDATE_AUTH_TOKEN:
            return {...(action.payload ? state : initialState), token: action.payload};

        case types.SAMPLE_FETCH_CALL_REQUEST:
            return {
                ...state,
                isFetching: true,
                fetchError: null,
            };
        case types.SAMPLE_FETCH_CALL_SUCCESS:
            return {
                ...state,
                isFetching: false,
                fetchError: null,
                sampleFetchCallData: action.payload,
            };
        case types.SAMPLE_FETCH_CALL_FAILURE:
            return {
                ...state,
                isFetching: false,
                fetchError: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
