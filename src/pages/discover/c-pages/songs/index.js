import React, { memo, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';

import XZXSongsHeader from "./c-cpns/songs-header";
import XZXSongsList from './c-cpns/songs-list';

import {
  getCategoryAction,
  getSongList,
  changeCurrentCategoryAction
} from './store/actionCreators'

import { SongsWrapper } from './style'


export default memo(function XZXSongs() {

  const dispatch = useDispatch();
  const cat = useLocation().cat; //通过路由从首页获取传过来的参数
  // console.log(cat)
  //其他hook

  useEffect(() => {
    if (cat) {
      dispatch(changeCurrentCategoryAction(cat));
    } else {
      dispatch(changeCurrentCategoryAction("全部"));//默认分类选择全部
    }
    //获取分类列表
    dispatch(getCategoryAction())
    //默认显示第一页
    dispatch(getSongList(0));
  }, [dispatch, cat]);

  return (
    <SongsWrapper className="wrap-v2">
      <XZXSongsHeader />
      <XZXSongsList />
    </SongsWrapper>
  )
})
