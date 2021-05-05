import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getNewAlbumAction } from '../../store/actionCreators';


import { Carousel } from 'antd';
import XZXAlbumCover from '@/components/album-cover'
import XZXThemeHeaderRCM from '@/components/theme-header-rcm'
import { AlbumWrapper } from './style'

export default memo(function XZXNewAlbum() {

    //redux hooks
    const { newAlbums } = useSelector(state => ({
        newAlbums: state.getIn(["recommend", "newAlbums"])
    }), shallowEqual)
    const dispatch = useDispatch();

    //其他hooks
    useEffect(() => {
        dispatch(getNewAlbumAction())
    }, [dispatch])
    const pageRef = useRef()

    return (
        <div>

            <AlbumWrapper >
                <XZXThemeHeaderRCM title="新碟上架" moreLink="/discover/album" />
                <div className="content">
                    <button className="arrow arrow-left sprite_02"
                        onClick={e => pageRef.current.prev()}></button>
                    <div className="album">
                        <Carousel dots={false} ref={pageRef}>
                            {
                                [0, 1].map(item => {
                                    return (
                                        <div key={item} className="page">
                                            {
                                                newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                                                    return <XZXAlbumCover
                                                        key={iten.id}
                                                        info={iten}
                                                        imgwh={"22px"}
                                                        icon={"-85px"}
                                                        iconactive={"-110px"} />
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                    <button className="arrow arrow-right sprite_02" onClick={e => pageRef.current.next()}></button>
                </div>
            </AlbumWrapper>
        </div>
    )
})
