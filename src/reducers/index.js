/**
 * Created by MAC91ELFVH7SDB on 5/4/17.
 */

import { combineReducers } from 'redux';
import ContactFormReducer from './ContactFormReducer';
import ContactReducer from './ContactReducer';

export default combineReducers({
    contactForm: ContactFormReducer,
    contacts: ContactReducer
});
