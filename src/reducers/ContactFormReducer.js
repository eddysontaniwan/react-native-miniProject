/**
 * Created by MAC91ELFVH7SDB on 5/4/17.
 */

import {
    CONTACT_UPDATE,
    CONTACT_CREATE,
    CONTACT_SAVE_SUCCESS,
    CONTACT_DELETE_SUCCESS,
    UPDATE_CONTACT_FAIL,
    FIRSTNAME_CHANGED,
    LASTNAME_CHANGED,
    AGE_CHANGED,
    SAVE_CONTACT
} from '../actions/types';

const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    age: '',
    id: '',
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONTACT_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case CONTACT_SAVE_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload
            };
        case CONTACT_DELETE_SUCCESS:
            return INITIAL_STATE;
        case CONTACT_CREATE:
            return INITIAL_STATE;
        case UPDATE_CONTACT_FAIL:
            return { ...state, error: 'Update failed.Please check your data again.', loading: false};


        case FIRSTNAME_CHANGED:
            return { ...state, firstName: action.payload };
        case LASTNAME_CHANGED:
            return { ...state, lastName: action.payload };
        case AGE_CHANGED:
            return { ...state, age: action.payload };
        case SAVE_CONTACT:
            return { ...state, loading: true, error: '' };
        default:
            return state;
    }
};
