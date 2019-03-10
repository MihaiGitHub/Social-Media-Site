import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  // Wire reducer from redux form into combineReducers call
  // All forms in all components will assume that the form reducer is being applied to the form piece of state
  form: formReducer
});

export default rootReducer;
