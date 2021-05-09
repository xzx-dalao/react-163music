import * as actionTypes from './constants';
import {
    getTopBanners,
    getHotRecommends,
    getTopListsDetail,
    getTopList
} from '@/services/recommend'
import {
    getHotAlbums,
} from '@/services/album.js';

//banner
const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})

export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            // console.log(res)
            dispatch(changeTopBannerAction(res))
        })
    }
}


//热门推荐
const changeHotRecommendAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result
})
export const getHotRecommendAction = (limit) => {
    return dispatch => {
        getHotRecommends(limit).then(res => {
            dispatch(changeHotRecommendAction(res))
        })
    }
}


//新碟上架
const changeNewAlbumAction = (res) => ({
    type: actionTypes.CHANGE_NEW_ALBUM,
    newAlbums: res.albums
})
export const getNewAlbumAction = () => {
    return dispatch => {
        getHotAlbums().then(res => {
            // console.log(res)
            dispatch(changeNewAlbumAction(res))
        })
    }
}

//存储榜单的ID值
const changeRankingIdAction = (id) => ({
    type: actionTypes.CHANGE_RANKING_ID,
    rankingId: id.list.splice(0, 3).map(item => item.id)
})
export const getRankingIdAction = () => {
    return dispatch => {
        getTopList().then(res => {
            dispatch(changeRankingIdAction(res));
            // console.log(res)
        })
    }
}
//榜单
const changeUpRankingAction = (res) => ({
    type: actionTypes.CHANGE_UP_RANKING,
    upRanking: res.playlist

})
const changeNewRankingAction = (res) => ({
    type: actionTypes.CHANGE_NEW_RANKING,
    newRanking: res.playlist

})
const changeOriginRankingAction = (res) => ({
    type: actionTypes.CHANGE_ORIGIN_RANKING,
    originRanking: res.playlist

})
export const getTopListAction = (idx) => {
    return (dispatch) => {
        // const rankingId = getState().getIn(["recommend", "rankingId"])
        getTopListsDetail(idx).then(res => {
            switch (idx) {
                case 19723756:
                    dispatch(changeUpRankingAction(res))
                    break;
                case 3779629:
                    dispatch(changeNewRankingAction(res))
                    break;
                case 2884035:
                    dispatch(changeOriginRankingAction(res))
                    break;
                default:
                    break;

            }
        })


    }
}

