import {
    SAVE_NAME,
} from '../actions/types';

const initialState = {
    user: '',
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case SAVE_NAME:
            return {
                ...state,
                user: payload.username
            }

        default:
            return state
    }
};
