import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import qs from 'qs';
import {
  getSearchAlbumListAction,
  getSearchTypeAction,
  changePageAction
} from '../../store/actionCreators'
import { SerachAlbumWrapper } from './style'
import XZXAlbumCover from '@/components/album-cover';
import XZXPagination from '@/components/pagination';

export default memo(function XZXSearchAlbum(props) {
  // props/state
  const { song, type } = qs.parse(props.location.search.substr(1))
  // redux hook
  const dispatch = useDispatch()
  const { albumList, changePage, searchLength } = useSelector((state) => ({
    albumList: state.getIn(['search', 'albumList']),
    changePage: state.getIn(["search", "changePage"]),
    searchLength: state.getIn(["search", "searchLength"])
  }), shallowEqual)
  const albums = albumList.albums || null;
  //hook
  useEffect(() => {
    // 传递歌曲发送网络请求
    if (song) dispatch(getSearchAlbumListAction(song, 30, type))
    dispatch(getSearchTypeAction(type))
  }, [dispatch, song, type])

  function onPageChange(page, pageSize) {
    dispatch(changePageAction(page))
    dispatch(getSearchAlbumListAction(song, 30, type, page));
  }
  return (
    <SerachAlbumWrapper>
      <div className="album-list">
        {
          albums && albums.map(item => {
            return <XZXAlbumCover size={"130px"}
              width={"153px"}
              bgp={"-845px"}
              imgwh={"28px"}
              icon={"-140px"}
              iconactive={"-170px"}
              key={item.id}
              info={item} />
          })

        }
      </div>
      <XZXPagination currentPage={changePage}
        total={searchLength}
        onPageChange={onPageChange} />
    </SerachAlbumWrapper>
  )
})
