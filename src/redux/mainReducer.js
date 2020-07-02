import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth7683Reducer from '../features/EmailAuth7683/redux/reducers';
import CalendarView7682Reducer from '../features/CalendarView7682/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth7683: EmailAuth7683Reducer,
CalendarView7682: CalendarView7682Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});