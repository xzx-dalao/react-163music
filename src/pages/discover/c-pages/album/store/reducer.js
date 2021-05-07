import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  hotAlbums: [],
  allAlbums: [],
  allTotal: 0,
  allCategory: 'ALL',
  changePage:1
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_HOT_ALBUMS:
      return state.set("hotAlbums", action.hotAlbums);
    case actionTypes.CHANGE_ALL_ALBUMS:
      return state.set("allAlbums", action.allAlbums);
    case actionTypes.CHANGE_ALL_TOTAL:
      return state.set("allTotal", action.allTotal);
    case actionTypes.CHANGE_ALL_CATEGORY:
      return state.set("allCategory", action.allCategory);
      case actionTypes.CHANGE_PAGE_NUM:
        return state.set("changePage", action.changePage);
    default:
      return state;
  }

}

export default reducer;