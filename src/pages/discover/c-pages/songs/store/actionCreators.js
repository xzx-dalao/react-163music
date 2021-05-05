import * as actionTypes from './constants';
import {
    getSongCategory,
    getSongCategoryList
} from "@/services/songs";
import {
    handleSongsCategory
} from "@/utils/handle-data";
import {
    getRankingList
} from '@/services/ranking';
import {
    getAddSongDetailAction,
    getSongDetailAction,
    changePlayListAction
} from '@/pages/player/store/actionCreators'


const changeCategoryAction = (res) => ({
    type: actionTypes.CHANGE_CATEGORY,
    category: res
})
export const getCategoryAction = () => {
    return dispatch => {
        getSongCategory().then(res => {
            const categoryData = handleSongsCategory(res);
            dispatch(changeCategoryAction(categoryData))
        })
    }
}

//选择分类
export const changeCurrentCategoryAction = (name) => ({
    type: actionTypes.CHANGE_CURRENT_CATEGORY,
    currentCategory: name
})

//热门
export const changeCurrentOrderAction = (newOrhot) => ({
    type: actionTypes.CHANGE_CURRENT_ORDER,
    currentOrder: newOrhot
})
//分类开关
export const changeCurrentPanelAction = (panel) => ({
    type: actionTypes.CHANGE_CURRENT_PANEL,
    currentPanel: panel
})

//加参数搜索歌曲
const changeSongListAction = (res) => ({
    type: actionTypes.CHANGE_CATEGORY_SONGS,
    categorySongs: res
})
export const getSongList = (page) => {
    return (dispatch, getState) => {
        // 1.获取currentCategory
        const name = getState().getIn(["songs", "currentCategory"]);
        const order = getState().getIn(["songs", "currentOrder"]);

        // 2.获取数据
        getSongCategoryList(name, page, 35, order).then(res => {
            // console.log(res)
            dispatch(changeSongListAction(res));
        })
    }
}


//监听页数变化
export const changePageAction = (changePage) => ({
    type: actionTypes.CHANGE_PAGE_NUM,
    changePage
})



// const changeSongsListAction = (trackIds) => ({
//     type: actionTypes.CHANGE_SONGS_LIST,
//     trackIds
// })
export const getSongsListAction = (id) => {
    return dispatch => {
        getRankingList(id).then(res => {
            //每次请求清空playlist
            dispatch(changePlayListAction([]))
            const trackIds = res.playlist.trackIds[0]
            const trackIds1 = res.playlist && res.playlist.trackIds
            if (!trackIds) return;
            dispatch(getSongDetailAction(trackIds.id))
            trackIds1.map(item =>
                setTimeout(()=>{
                    dispatch(getAddSongDetailAction(item.id))
                },100)
            )

            // dispatch(changeSongsListAction(trackIds))


        })
    }
}