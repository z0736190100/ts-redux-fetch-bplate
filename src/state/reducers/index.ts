import { combineReducers } from 'redux';
import entitiesReducer from './entitiesReducer';

const reducers = combineReducers({
  entities: entitiesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
