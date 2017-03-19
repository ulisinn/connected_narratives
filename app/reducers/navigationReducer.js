/**
 * Created by ulrichsinn on 03/09/2017.
 */

import {TOGGLE_NAVIGATION} from '../actions';
import {initialState} from './initialState';

export default function currentNavigation(state = initialState['navigation_en'], action) {
  // let newState;
  // console.log('navigationReducer', action);
  switch (action.type) {
    case TOGGLE_NAVIGATION:
      return (action.payload.text.startsWith('fr')) ? initialState['navigation_fr'] : initialState['navigation_en'];
    default:
      return state;
  }
}
