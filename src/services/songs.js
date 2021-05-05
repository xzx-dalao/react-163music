import request from "./request";

export function getSongCategory() {
  return request({
    url: "/playlist/catlist"
  })
}

// export function getSongCategoryList(order='hot',cat="全部", offset=0, limit = 35) {
//   return request({
//     url: "/top/playlist",
//     params: {
//       order,
//       cat,
//       limit,
//       offset
//     }
//   })
// }
export function getSongCategoryList(cat="全部", offset=0, limit = 35,order='hot') {
  return request({
    url: "/top/playlist",
    params: {
      cat,
      offset,
      limit,
      order
    }
  })
}