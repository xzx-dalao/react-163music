import React, { memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";


import {
  getSongList,
  changePageAction
} from '../../store/actionCreators'

import XZXThemeCover from '@/components/songs-cover';
import XZXPagination from '@/components/pagination';
import { SongListWrapper } from './style'

export default memo(function XZXSongsList() {

  const { categorySongs,changePage } = useSelector(state => ({
    categorySongs: state.getIn(["songs", "categorySongs"]),
    changePage: state.getIn(["songs", "changePage"])
  }), shallowEqual);
  const songList = categorySongs.playlists || [];
  const total = categorySongs.total || 0
  const dispatch = useDispatch();
  
  function onPageChange(page, pageSize) {
    dispatch(changePageAction(page))
    dispatch(getSongList(page));
  }

  return (
    <SongListWrapper>
      <div className="songs-list">
        {
          songList.map((item, index) => {
            return (
              <XZXThemeCover info={item} key={item.id} right="30px" />
            )
          })
        }
      </div>
      {/* 分页 */}
      <XZXPagination currentPage={changePage} 
                    total={total} 
                    onPageChange={onPageChange}/>
    </SongListWrapper>

  )
})
