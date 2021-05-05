import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import qs from 'qs';
import { SingleSongWrapper } from './style'
import { 
  getSearchSongListAction,
  getSearchTypeAction ,
  changePageAction
} from '../../store/actionCreators'
import XZXPagination from '@/components/pagination';
import { formatMinuteSecond } from '@/utils/format-utils'
import SingleSongItem from './singleitem'

export default memo(function XZXSingle(props) {
  // props/state
  const { song, type } = qs.parse(props.location.search.substr(1))
  // redux hook
  const dispatch = useDispatch()
  const { searchSongList,changePage,searchLength } = useSelector((state) => ({
      searchSongList: state.getIn(['search', 'searchSongList']),
      changePage: state.getIn(["search", "changePage"]),
      searchLength: state.getIn(["search", "searchLength"])
    }),shallowEqual)
  const songs = searchSongList.songs || null;

  //hook
  useEffect(() => {
    // 传递歌曲发送网络请求
    if (song) dispatch(getSearchSongListAction(song, 30, type))
    // dispatch(getSearchLengthAction(searchSongList.songCount))
    dispatch(getSearchTypeAction(type))
  }, [dispatch, song, type])
   
  function onPageChange(page, pageSize) {
    dispatch(changePageAction(page))
    dispatch(getSearchSongListAction(song, 30, type,page));
  }
  return (
    <SingleSongWrapper>
      {songs && songs.map((item,index) => {
        return (
          <SingleSongItem
          key={item.id}
          songId={item.id}
          songName={item.name}
          songAlia={item.alia}
          singer={item.ar[0].name}
          album={item.al.name}
          tns={item.tns}
          duration={formatMinuteSecond(item.dt)}
        />
        )
      })}
          <XZXPagination currentPage={changePage} 
                    total={searchLength} 
                    onPageChange={onPageChange}/>
    </SingleSongWrapper>
  )
})
