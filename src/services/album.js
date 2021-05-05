import request from './request';

export function getHotAlbums() {
  return request({
    url: "/album/newest"
  })
}

export function getAllAlbums(limit, offset, area = "ALL") {
  return request({
    url: "/album/new",
    params: {
      limit,
      offset,
      area
    }
  })
}
export function getAlbumsOfSongList(id) {
  return request({
    url: "/album",
    params: {
      id
    }
  })
}