import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import qs from 'qs';
import {
    getSearchSongsListAction,
    getSearchTypeAction,
    changePageAction
} from '../../store/actionCreators'
import { XZXSongsListWrapper } from './style'
import XZXThemeCover from '@/components/songs-cover';
import XZXPagination from '@/components/pagination';
export default memo(function XZXSongs(props) {
    // props/state
    const { song, type } = qs.parse(props.location.search.substr(1))
    // redux hook
    const dispatch = useDispatch()
    const { playList, searchLength,changePage } = useSelector((state) => ({
        playList: state.getIn(['search', 'playList']),
        changePage: state.getIn(["search", "changePage"]),
        searchLength: state.getIn(["search", "searchLength"])
    }), shallowEqual)
    const playlists = playList.playlists || null;
    //hook
    useEffect(() => {
        // 传递歌曲发送网络请求
        if (song) dispatch(getSearchSongsListAction(song, 20, type))
        dispatch(getSearchTypeAction(type))
    }, [dispatch, song, type])

    function onPageChange(page, pageSize) {
        dispatch(changePageAction(page))
        dispatch(getSearchSongsListAction(song, 30, type, page));
    }
    return (
        <XZXSongsListWrapper>
            <div className="XZXSongs-list">
                {
                    playlists && playlists.map((item, index) => {
                        return (
                            <XZXThemeCover info={item} key={item.id} right="30px" />
                        )
                    })
                }
            </div>
            <XZXPagination currentPage={changePage}
                total={searchLength}
                onPageChange={onPageChange} />
        </XZXSongsListWrapper>
    )
})
