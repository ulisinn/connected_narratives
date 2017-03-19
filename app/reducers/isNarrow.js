/**
 * Created by ulrichsinn on 03/17/2017.
 */
import {NARROW_NAV, WIDE_NAV} from '../actions';


export default function isNarrow(state = null, action) {
  // let newState;
  // console.log('isNarrow', action);
  switch (action.type) {
    
    case NARROW_NAV:
      return true;
    
    case WIDE_NAV:
      return false;
    
    default:
      return state;
  }
}
