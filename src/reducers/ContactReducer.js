/**
 * Created by MAC91ELFVH7SDB on 5/4/17.
 */

import {
    CONTACT_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONTACT_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};