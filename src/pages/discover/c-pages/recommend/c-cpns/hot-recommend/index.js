import React, { memo, useEffect, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';

import XZXThemeHeaderRCM from '@/components/theme-header-rcm'
import XZXSongsCover from '@/components/songs-cover'
import {
    HotRecommendWrapper
} from './style'
import { 
    getHotRecommendAction 
} from '../../store/actionCreators'
import { 
    HOT_RECOMMEND_LIMIT
 } from '@/common/contants'



export default memo(function XZXHotRecommend() {
    //state
    //redux hooks
    const { hotRecommends } = useSelector(state => ({
        hotRecommends: state.getIn(["recommend", "hotRecommends"])
    }), shallowEqual)
    const dispatch = useDispatch();
    const history = useHistory();

    //其他hooks
    useEffect(() => {
        dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
    }, [dispatch])

    const keywordClick = useCallback((keyword) => {
        history.push({ pathname: "/discover/songs", cat: keyword });//通过路由传到参数到菜单页
        // console.log(history)
    }, [history]);
    return (
        <HotRecommendWrapper>
            <XZXThemeHeaderRCM
                title="热门推荐"
                moreLink="/discover/songs"
                keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
                keywordClick={keywordClick} />
            <div className="recommend-list">
                {
                    hotRecommends.map((item, index) => {
                        return <XZXSongsCover key={item.id} info={item} />
                    })
                }
            </div>
        </HotRecommendWrapper>
    )
})
