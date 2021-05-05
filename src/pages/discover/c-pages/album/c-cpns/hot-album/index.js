import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getHotAlbumsAction } from '../../store/actionCreators';

import XZXAlbumCover from '@/components/album-cover';
import XZXThemeHeaderNormal from '@/components/theme-header-normal';
import {
  HotAlbumWrapper
} from './style';
export default memo(function XZXHotAlbum() {
  //redux hook
  const { hotAlbums } = useSelector(state => ({
    hotAlbums: state.getIn(["album", "hotAlbums"])
  }), shallowEqual)
  const dispatch = useDispatch();

  //hooks
  useEffect(() => {
    dispatch(getHotAlbumsAction());
  }, [dispatch]);

  return (
    <HotAlbumWrapper>
      <XZXThemeHeaderNormal title="热门新碟" />
      <div className="album-list">
        {
          hotAlbums.slice(0, 10).map((item, index) => {
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
    </HotAlbumWrapper>
  )
})
