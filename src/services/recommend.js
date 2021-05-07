import request from './request';

//轮播图
export function getTopBanners() {
    return request({
        url:"/banner"
    })
}
//热门推荐
export function getHotRecommends(limit) {
    return request({
        url:"/personalized",
        params:{
            limit
        }
    })
}
//新碟上架
export function getNewAlbums(limit) {
    return request({
        url:"/top/album",
        params:{
            limit
        }
    })
}

//榜单
export function getTopListsDetail(id) {
    return request({
        url: "/playlist/detail",
    params: {
      id
    }
    })
    

    
}
export function getTopList() {
    return request({
      url: "/toplist"
    })
  }