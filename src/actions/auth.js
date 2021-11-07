import {
    SAVE_NAME,
} from './types';


export const saveName = (username) => dispatch => {
    dispatch({
        type: SAVE_NAME,
        payload: { username }
    })
}



