import {ActionType} from '../action-types';
import {Action} from '../actions';

interface FetchedDataState {
    loading: boolean;
    error: boolean | null;
    data: string[];
}

const initialState: FetchedDataState = {
    loading: false,
    error: null,
    data: [],
};

const reducer = (state= initialState, action: Action): FetchedDataState => {

    switch (action.type) {
        case ActionType.FETCH_DATA:
            return {loading: true, error: null, data: []};

        case ActionType.FETCH_DATA_SUCCESS:
            return {loading: false, error: null, data: action.payload};

        case ActionType.FETCH_DATA_ERROR:
            return {loading: false, error: action.payload, data: []};

        default:
            return state;
    }
};

export default reducer;
