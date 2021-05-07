import React, { memo } from 'react'
// import LazyLoad from 'react-lazyload';

import { getSizeImage } from '@/utils/format-utils'
import {  useDispatch } from 'react-redux';
import {getAlbumsOfSongListAction} from '../../pages/discover/c-pages/album/store/actionCreators'
import { AlbumWrapper } from './style'

export default memo(function XZXAlbumCover(props) {

  const { info, size = "100px", width = "118px", bgp = "-570px",imgwh,icon,iconactive } = props;
  const dispatch = useDispatch()
  const PlayAllMusic=(id)=>{
    dispatch(getAlbumsOfSongListAction(id))
}
  return (
    <AlbumWrapper size={size} width={width} bgp={bgp} imgwh={imgwh}icon={icon}iconactive={iconactive}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, 150)} alt="" />
        <div className="cover sprite_covor">{info.name}</div>
        <i className=" play sprite_icon" onClick={e=>PlayAllMusic(info.id)}></i>
      </div>
      <div className="album-info">
        <div className="name">{info.name}</div>
        <div className="artist">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})
