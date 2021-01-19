import { Dispatch, AppState } from './AppContext';
import JIKAN_DATA_ACTION from './jikandata/action';
import JikanReducer from './jikandata/reducer';

const AppReducer = (state: AppState, action: Dispatch) => {
  switch (action.type) {
    case JIKAN_DATA_ACTION.type: {
      return JikanReducer(state, action);
    }
    default:
      return JikanReducer(state, action);
  }
};

export default AppReducer;
