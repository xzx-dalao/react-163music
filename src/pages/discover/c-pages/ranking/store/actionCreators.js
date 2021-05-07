import * as actionTypes from './constants';
import {
  getTopList,
  getRankingList
} from '@/services/ranking';
//toplist



export const changeRankingCurrentIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  currentIndex: index
})


const changeTopListAction = (res) => ({
  type: actionTypes.CHANGE_TOP_LIST,
  topList: res.list
})
export const getTopListAction = () => {
  return dispatch => {
    getTopList().then(res => {
      dispatch(changeTopListAction(res));
    })
  }
}


const changeRankingListAction = (res) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList: res.playlist
})
export const getRankingListAction = (id) => {
  // console.log(id)
  return dispatch => {
    getRankingList(id).then(res => {
      // console.log(res)
      dispatch(changeRankingListAction(res))
    })
  }
}
