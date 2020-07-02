import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth7688Reducer from '../features/EmailAuth7688/redux/reducers';
import CalendarView7687Reducer from '../features/CalendarView7687/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth7688: EmailAuth7688Reducer,
CalendarView7687: CalendarView7687Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});