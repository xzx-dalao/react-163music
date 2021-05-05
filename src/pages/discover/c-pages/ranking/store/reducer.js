import { Map } from 'immutable'
import * as actionTypes from './constants';
const defaultState = Map({
  topList: [],
  playList: {},
  currentIndex: 0,
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_LIST:
      return state.set("topList", action.topList);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_CURRENT_INDEX:
      return state.set("currentIndex",action.currentIndex)
    default:
      return state;
  }
}


export default reducer