import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action){
    switch(action.type){
        case DELETE_POST:
// If state object has a key of the post id, return a new object without that particular post id
            return _.omit(state, action.payload);
        case FETCH_POST:
// Return an object with the old state plus a new key of action.payload.data.id and value of action.payload.data
            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_POSTS:
// Turn array of objects into an object itself
// Take data array and use "id" as the property to pull off each object to use as the key on the resulting object
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}