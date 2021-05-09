import React, { memo,useEffect } from 'react'
import {useDispatch} from 'react-redux'

import {getRankingIdAction} from '../recommend/store/actionCreators'

import XZXTopBanner from './c-cpns/top-banner'
import XZXHotRecommend from './c-cpns/hot-recommend'
import XZXNewAlbum from './c-cpns/new-album'
import XZXRecommendRanking from './c-cpns/recommend-ranking'
import XZXUserLogin from './c-cpns/user-login'
// import XZXSettleSinger from './c-cpns/settle-singer'
// import XZXHotAnchor from './c-cpns/hot-anchor'
import {
    RecommendWrapper,
    RecommendLeft,
    RecommendRight,
    Content
} from './style'

function XZXRecommend() {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRankingIdAction())
    }, [dispatch])
    return (
        <RecommendWrapper>
            <XZXTopBanner/>
            <Content className="wrap-v2">
                <RecommendLeft>
                    <XZXHotRecommend/>
                    <XZXNewAlbum/>
                    <XZXRecommendRanking/>
                </RecommendLeft>
                <RecommendRight>
                    <XZXUserLogin/>
                    {/* <XZXSettleSinger/>
                    <XZXHotAnchor/> */}
                </RecommendRight>
            </Content>
        </RecommendWrapper>
    )
}
export default memo(XZXRecommend)

// function XZXRecommend(props) {
//     const { getBanners,topBanners } = props
//     useEffect(() => {
//         getBanners()
//     }, [getBanners])

//     return (
//         <div>
//             XZXRecommend{topBanners.length}
//         </div>
//     )
// }
// const mapStateToProps = state => ({
//     topBanners: state.recommend.topBanners
// });

// const mapDispatchToProps = dispatch => ({
//     getBanners: () => {
//         dispatch(getTopBannerAction())
//     }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(XZXRecommend))