import * as actionTypes from './constants';

import {
  getHotAlbums,
  getAllAlbums,
  getAlbumsOfSongList
} from '@/services/album.js';
import {
  getAddSongDetailAction,
  getSongDetailAction,
  changePlayListAction
} from '@/pages/player/store/actionCreators'
//热门新碟
const changeHotAlbumsAction = (res) => ({
  type: actionTypes.CHANGE_HOT_ALBUMS,
  hotAlbums: res.albums
})
export const getHotAlbumsAction = () => {
  return dispatch => {
    getHotAlbums().then(res => {
      dispatch(changeHotAlbumsAction(res));
      // console.log(res)
    })
  }
}

//全部新碟
const changeAllAlbumAction = (res) => ({
  type: actionTypes.CHANGE_ALL_ALBUMS,
  allAlbums: res.albums
})

const changeAllTotalAction = (res) => ({
  type: actionTypes.CHANGE_ALL_TOTAL,
  allTotal: res.total
})
export const getAllAlbumsAction = (page) => {
  return (dispatch, getState) => {
    //监听选择分类的变化
    const area = getState().getIn(["album", "allCategory"]);
    getAllAlbums(30, (page - 1) * 30, area).then(res => {
      dispatch(changeAllAlbumAction(res));
      dispatch(changeAllTotalAction(res));
    })
  }
}
//选择分类
export const changeAlubumsCategoryAction = (name) => ({
  type: actionTypes.CHANGE_ALL_CATEGORY,
  allCategory: name
})
//监听页数变化
export const changePageAction = (changePage) => ({
  type: actionTypes.CHANGE_PAGE_NUM,
  changePage
})

//获取专辑里的歌
export const getAlbumsOfSongListAction = (id) => {
  return dispatch => {
    getAlbumsOfSongList(id).then(res => {
      //每次请求清空playlist
      dispatch(changePlayListAction([]))
      const id = res.songs[0].privilege.id
      const id1 = res.songs
      dispatch(getSongDetailAction(id))
      id1.map(item =>
        setTimeout(() => {
          dispatch(getAddSongDetailAction(item.privilege.id))
        }, 100)
      )

      // dispatch(changeSongsListAction(trackIds))


    })
  }
}