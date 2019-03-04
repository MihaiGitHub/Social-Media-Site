import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action){
    switch(action.type){
        case FETCH_POSTS:
// Turn array of objects into an object itself
// Take data array and use "id" as the property to pull off each object to use as the key on the resulting object
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}