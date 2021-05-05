import React, { memo } from 'react'
// import LazyLoad from 'react-lazyload';

import { getCount, getSizeImage } from '@/utils/format-utils'

import {
    SongsCoverWrapper
} from './style'

export default memo(function XZXDjRadiosCover(props) {
    const { info, right } = props;
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
                        <i className="sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <div className="cover-bottom text-nowrap">
                {info.name}
            </div>
            <div className="cover-info text-nowrap">
                <span className="cover-by">by</span>
                {info.dj.nickname}
                <div className="cover-info icon">
                    {
                        info.dj.gender !== 0 ? info.dj.gender === 1 ?
                            <i className="icon gender2_icon sprite_icon2"></i>
                            : <i className="icon gender1_icon sprite_icon2"></i> : null
                    }
                </div>

            </div>
        </SongsCoverWrapper>
    )
})
