import { Dispatch, AppState } from '../AppContext';
import JIKAN_DATA_ACTION from './action';

const UserReducer = (state: AppState, action: Dispatch) => {
  switch (action.action) {
    case JIKAN_DATA_ACTION.action.UPDATE_JIKAN_DATA: {
      return {
          ...state,
          jikanState: {
            ...state.jikanState,
            jikanObjects: action.data
          }
        };
    }
    case JIKAN_DATA_ACTION.action.ADD_JIKAN_DATA: {
      return {
        ...state,
        jikanState: {
          ...state.jikanState,
          jikanObjects: {
            ...state.jikanState.jikanObjects,
            [action.data.members]: action.data
          }
        }
      };
    }

    default:
      return state;
  }
};

export default UserReducer;
