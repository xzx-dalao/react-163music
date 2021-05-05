import React, { memo } from 'react'
// import LazyLoad from 'react-lazyload';
import {  useDispatch } from 'react-redux';
import {getSongsListAction} from '@/pages/discover/c-pages/songs/store/actionCreators'

import { getCount, getSizeImage } from '@/utils/format-utils'

import {
    SongsCoverWrapper
} from './style'

export default memo(function XZXSongsCover(props) {
    const { info, right } = props;
    const dispatch = useDispatch()

    const PlayAllMusic=(id)=>{
        dispatch(getSongsListAction(id))
    }
    return (
        <SongsCoverWrapper right={right}>
            <div className="cover-top">
                <img src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} alt="" />
                <div className="cover sprite_covor">
                    <div className="info sprite_covor">
                        <span>
                            <i className="sprite_icon erji"></i>
                            {getCount(info.playCount)}
                        </span>
                        <i className="sprite_icon play" onClick={e=>PlayAllMusic(info.id)}></i>
                    </div>
                </div>
            </div>
            <div className="cover-bottom text-nowrap">
                {info.name}
            </div>
            <div className="cover-source text-nowrap">
                by {info.copywriter || info.creator.nickname}
            </div>
        </SongsCoverWrapper>
    )
})
