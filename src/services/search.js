import request from "./request";

export function getSearchSuggest(keywords) {
  return request({
    url: "/search/suggest",
    params:{
        keywords
    }
  })
}

export function getSearchSongData(keywords, limit = 30, type = 1,offset =0) {
  return request({
    url: '/cloudsearch',
    params: {
      keywords,
      limit,
      type,
      offset
    },
  });
}
