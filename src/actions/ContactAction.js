/**
 * Created by MAC91ELFVH7SDB on 5/5/17.
 */

import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import {
    BASE_URL,
    CONTACT_UPDATE,
    CONTACT_CREATE,
    CONTACT_SAVE_SUCCESS,
    CONTACT_DELETE_SUCCESS,
    CONTACT_FETCH_SUCCESS,
    UPDATE_CONTACT_FAIL,
    FIRSTNAME_CHANGED,
    LASTNAME_CHANGED,
    AGE_CHANGED,
    SAVE_CONTACT
} from './types';


export const firstNameChanged = (text) => {
    return {
        type: FIRSTNAME_CHANGED,
        payload: text
    };
};

export const lastNameChanged = (text) => {
    return {
        type: LASTNAME_CHANGED,
        payload: text
    };
};

export const ageChanged = (text) => {
    return {
        type: AGE_CHANGED,
        payload: text
    };
};

export const contactUpdate = ({ prop, value }) => {
    return {
        type: CONTACT_UPDATE,
        payload: { prop, value }
    };
};

export const contactFetch = () => {
    return (dispatch) => {
        axios.get(BASE_URL)
            .then(response => {
                    dispatch({ type: CONTACT_FETCH_SUCCESS, payload: response.data });
                }
            );
    };
};

export const contactCreate = ({ firstName, lastName, age }) => {
    return (dispatch) => {
        dispatch({ type: SAVE_CONTACT });

        if (firstName.length == 0 || lastName.length == 0 || age.length == 0)
            dispatch({ type: UPDATE_CONTACT_FAIL });
        else {
            axios.post(BASE_URL, {
                firstName: firstName,
                lastName: lastName,
                age: age
            })
                .then(response => {
                    dispatch({type: CONTACT_CREATE});
                    Actions.contactList({type: 'reset'});
                })
                .catch(() => updateContactFail(dispatch));
        }
    };
};

export const contactSave = ({ firstName, lastName, age, id }) => {
    console.log({ firstName, lastName, age, id });
    return (dispatch) => {
        dispatch({ type: SAVE_CONTACT });

        if (firstName.length == 0 || lastName.length == 0 || age.length == 0)
            dispatch({ type: UPDATE_CONTACT_FAIL });
        else {
            axios.put(`${BASE_URL}/${id}`, {
                firstName: firstName,
                lastName: lastName,
                age: age
            })
                .then(response => {
                    dispatch({type: CONTACT_SAVE_SUCCESS});
                    Actions.contactList({type: 'reset'});
                })
                .catch(() => updateContactFail(dispatch));
        }
    };
}

export const contactDelete = ({ id }) => {
    return (dispatch) => {
        axios.delete(`${BASE_URL}/${id}`)
            .then(response => {
                dispatch({ type: CONTACT_DELETE_SUCCESS });
                Actions.contactList({ type: 'reset' });
            })
            .catch(() => updateContactFail(dispatch));
    };
}

export const clearFormData = () => {
    return (dispatch) => {
        dispatch({ type: CONTACT_SAVE_SUCCESS });
    }
}

const updateContactFail = (dispatch) => {
    dispatch({ type: UPDATE_CONTACT_FAIL });
};