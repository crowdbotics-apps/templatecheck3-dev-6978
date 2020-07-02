import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth7678Reducer from '../features/EmailAuth7678/redux/reducers';
import CalendarView7677Reducer from '../features/CalendarView7677/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth7678: EmailAuth7678Reducer,
CalendarView7677: CalendarView7677Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});