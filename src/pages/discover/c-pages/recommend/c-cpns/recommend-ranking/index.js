import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'


import XZXThemeHeaderRCM from '@/components/theme-header-rcm'
import XZXTopRanking from '@/components/top-ranking'
import { RankingWrapper } from './style'
import { getTopListAction } from '../../store/actionCreators'

export default memo(function XZXRecommendRanking() {

    //redux hooks
    const { rankingId, upRanking, newRanking, originRanking } = useSelector(state => ({
        rankingId: state.getIn(["recommend", "rankingId"]),
        upRanking: state.getIn(["recommend", "upRanking"]),
        newRanking: state.getIn(["recommend", "newRanking"]),
        originRanking: state.getIn(["recommend", "originRanking"]),
    }), shallowEqual);
    const dispatch = useDispatch();
    //其他hooks
    useEffect(() => {
        rankingId.map((item)=>(
            dispatch(getTopListAction(item))
        ))
    }, [dispatch,rankingId])

    return (
        <RankingWrapper>
            <XZXThemeHeaderRCM title="榜单" moreLink="/discover/ranking"/>
            <div className="tops">
                <XZXTopRanking info={upRanking}  moreLink="/discover/ranking" currentIndex={0}/>
                <XZXTopRanking info={newRanking} moreLink="/discover/ranking" currentIndex={1}/>
                <XZXTopRanking info={originRanking} moreLink="/discover/ranking" currentIndex={2}/>
            </div>
        </RankingWrapper>
    )
})
