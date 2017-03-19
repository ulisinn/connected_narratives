import { combineReducers } from 'redux';
import currentNavigation from './navigationReducer';
import lang from './currentLanguage';
import isNarrow from './isNarrow';
import {routerReducer} from 'react-router-redux';

export const rootReducer = combineReducers({
  currentNavigation,
  lang,
  isNarrow,
  routing: routerReducer,
});
