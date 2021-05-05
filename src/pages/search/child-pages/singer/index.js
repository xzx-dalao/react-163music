import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import qs from 'qs';
import SingerItem from './singer-item'
import {
  getSearchSingerListAction,
  getSearchTypeAction,
  changePageAction
} from '../../store/actionCreators'
import XZXPagination from '@/components/pagination';
import { XZXSingerWrapper } from './style'

export default memo(function XZXSinger(props) {

  // props/state
  const { song, type } = qs.parse(props.location.search.substr(1))
  // redux hook
  const dispatch = useDispatch()
  const { singerList, changePage, searchLength } = useSelector((state) => ({
    singerList: state.getIn(['search', 'singerList']),
    changePage: state.getIn(["search", "changePage"]),
    searchLength: state.getIn(["search", "searchLength"])
  }), shallowEqual)

  //hook
  useEffect(() => {
    // 传递歌曲发送网络请求
    if (song) dispatch(getSearchSingerListAction(song, 30, type))
    dispatch(getSearchTypeAction(type))
  }, [dispatch, song, type])

  function onPageChange(page, pageSize) {
    dispatch(changePageAction(page))
    dispatch(getSearchSingerListAction(song, 30, type, page));
  }
  const artists = singerList.artists || null;
  return (
    <XZXSingerWrapper>
      {artists && artists.map((item) => {
        return (
          <SingerItem
            key={item.id}
            coverPic={item.img1v1Url || item.picUrl}
            singer={item.name}
            accountId={item.accountId || null}
          />
        )
      })}
      <div className="page">
        <XZXPagination currentPage={changePage}
          total={searchLength}
          onPageChange={onPageChange} />
      </div>

    </XZXSingerWrapper>
  )
})
