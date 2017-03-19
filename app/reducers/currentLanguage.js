/**
 * Created by ulrichsinn on 03/17/2017.
 */

import {TOGGLE_LANGUAGE} from '../actions';

export default function lang(state = 'en', action) {
  // let newState;
  // console.log('lang', action);
  switch (action.type) {
    
    case TOGGLE_LANGUAGE:
      return (action.payload.text.startsWith('fr')) ? 'fr' : 'en';
    // currentNavigation: (action.payload.text.startsWith('fr')) ? state['navigation_fr'] : state['navigation_en'],
    
    default:
      return state;
  }
}
