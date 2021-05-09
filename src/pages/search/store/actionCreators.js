import * as actionTypes from './constants'
import {
  getSearchSuggest,
  getSearchSongData
} from '@/services/search.js';



//小的搜索框的数据
const changeSmallSearchSongsListAction = (smallSongsList) => ({
  type: actionTypes.CHANGE_SMALL_SEARCH_SONG_LIST,
  smallSongsList,
});
export const getSearchSuggestValueAction = (value) => {
  return (dispatch) => {
    getSearchSuggest(value).then(res => {
      const searchSuggestValue = res.result && res.result.order
      const songsList = res.result
      if (!searchSuggestValue) {
        return;
      }
      dispatch(changeSmallSearchSongsListAction(songsList));
    })
  }
}
// 搜索框的关键字
export const getSearchValueAction = (searchValue) => ({
  type: actionTypes.GET_SEARCH_VALUE,
  searchValue
})

//type
export const getSearchTypeAction = (searchType) => ({
  type: actionTypes.GET_SEARCH_TYPE,
  searchType
})
//长度
const getSearchLengthAction =(searchLength)=>({
  type: actionTypes.CHANGE_SEARCH_LENGTH,
  searchLength
})
// 改变焦点状态
export const changeFocusStateAction = (focusState) => ({
  type: actionTypes.CHANGE_FOCUS_STATE,
  focusState
})
//监听页数变化
export const changePageAction = (changePage) => ({
  type: actionTypes.CHANGE_PAGE_NUM,
  changePage
})

// 搜索歌曲列
const changeSearchSongListAction = (searchSongList) => ({
  type: actionTypes.CHANGE_SEARCH_SONG_LIST,
  searchSongList,
});

export const getSearchSongListAction = (...searchStr) => {

  return (dispatch) => {
    getSearchSongData(...searchStr).then((res) => {
      if(!res.result) return
      const searchSongList = res.result
      const leng = res.result.songCount
      dispatch(changeSearchSongListAction(searchSongList));
      dispatch(getSearchLengthAction(leng))
    });
  };
};
// 搜索歌手列表
const changeSearchSingerListAction = (singerList) => ({
  type: actionTypes.CHANGE_SINGER_LIST,
  singerList
})

export const getSearchSingerListAction = (...searchStr) => {
  return (dispatch) => {
    getSearchSongData(...searchStr).then((res) => {
      if(!res.result) return
      const singerList = res.result
      const leng = res.result.artistCount
      dispatch(changeSearchSingerListAction(singerList))
      dispatch(getSearchLengthAction(leng))
    })
  }
}

// 搜索专辑列表
const changeSearchAlbumListAction = (albumList) => ({
  type: actionTypes.CHANGE_ALBUM_LIST,
  albumList
})

export const getSearchAlbumListAction = (...searchStr) => {
  return (dispatch) => {
    getSearchSongData(...searchStr).then((res) => {
      if(!res.result) return
      const albumList = res.result
      const leng = res.result.albumCount
      dispatch(changeSearchAlbumListAction(albumList))
      dispatch(getSearchLengthAction(leng))
    })
  }
}

// 搜索歌单列表
const changeSearchSongsListAction = (playList) => ({
  type: actionTypes.CHANGE_SONGS_LIST,
  playList
})

export const getSearchSongsListAction = (...searchStr) => {

  return (dispatch) => {
    getSearchSongData(...searchStr).then((res) => {
      if(!res.result) return
      const playList = res.result
      const leng = res.result.playlistCount
      dispatch(changeSearchSongsListAction(playList))
      dispatch(getSearchLengthAction(leng))
    })
  }
}
// 搜索视频列表
const changeSearchDjListAction = (djRadiosList) => ({
  type: actionTypes.CHANGE_DJ_LIST,
  djRadiosList
})

export const getSearchDjRadiosListAction = (...searchStr) => {

  return (dispatch) => {
    getSearchSongData(...searchStr).then((res) => {
      if(!res.result) return
      const djRadiosList = res.result
      const leng = res.result.djRadiosCount
      dispatch(changeSearchDjListAction(djRadiosList))
      dispatch(getSearchLengthAction(leng))
    })
  }
}