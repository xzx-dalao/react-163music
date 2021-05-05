import React, { memo } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  getSearchSongListAction,
  changeFocusStateAction
} from '../../pages/search/store'
import {
  SerachWrapper
} from './style'
export default memo(function XZXSearchPage() {
  //redux hooks
  const history = useHistory();
  const dispatch = useDispatch()
  const {searchValue,smallSongsList,}= useSelector(state => ({
      searchValue: state.getIn(["search", "searchValue"]),
      smallSongsList: state.getIn(["search", "smallSongsList"]),
    }), shallowEqual)


  const changeCurrentSong = (id, item) => {
    // 放到搜索文本框
    // setValue(item.name + '-' + item.artists[0].name);
    // //派发action

    // // 隐藏下拉框
    // dispatch(changeFocusStateAction(false));
    console.log(id, item)
  };
  const touchSearchUser = () => {
    const limit = 10
    history.push({ pathname: `/search/single?song=${searchValue}&type=1`, keywords: searchValue, limit })
    dispatch(getSearchSongListAction(searchValue, limit))
    dispatch(changeFocusStateAction(false))
    // setRedict(true)
  }

  return (
    <SerachWrapper>
      <div className="all">
        <div className="searchSong" onClick={e => touchSearchUser()}>搜索"{searchValue}"相关全部歌曲 &gt;</div>
      </div>
      <div className="category">{
        <div>

          <dl>
            <dt></dt>
            <div>
              {
                smallSongsList.songs && <dd>
                  <nav>
                    <dt>
                      <i className="sprite_icon2 songs-icon"></i>
                      <span>单曲</span>
                    </dt>
                  </nav>
                  {
                    smallSongsList.songs.map((item) => {
                      return (
                        <div className="item " key={item.id} onClick={(e) => changeCurrentSong(item.id, item)}>
                          <span className="link "
                          >{item.name}-{item.artists[0].name}</span>
                        </div>
                      )
                    })
                  }
                </dd>}
              {
                smallSongsList.artists && <dd>
                  <nav>
                    <dt>
                      <i className="sprite_icon2 artists-icon"></i>
                      <span>歌手</span>
                    </dt>
                  </nav>
                  {
                    smallSongsList.artists.map((item) => {
                      return (
                        <div className="item " key={item.id} onClick={(e) => changeCurrentSong(item.id, item)}>
                          <span className="link "
                          >{item.name}</span>
                        </div>
                      )
                    })
                  }
                </dd>}
              {
                smallSongsList.albums && <dd>
                  <nav>
                    <dt>
                      <i className="sprite_icon2 albums-icon"></i>
                      <span>专辑</span>
                    </dt>
                  </nav>
                  {
                    smallSongsList.albums && smallSongsList.albums.map((item) => {
                      return (
                        <div className="item " key={item.id} onClick={(e) => changeCurrentSong(item.id, item)}>
                          <span className="link "
                          >{item.name}</span>
                        </div>
                      )
                    })
                  }
                </dd>}
              {
                smallSongsList.playlists && <dd>
                  <nav>
                    <dt>
                      <i className="sprite_icon2 plays-icon"></i>
                      <span>歌单</span>
                    </dt>
                  </nav>
                  {
                    smallSongsList.playlists.map((item) => {
                      return (
                        <div className="item " key={item.id} onClick={(e) => changeCurrentSong(item.id, item)}>
                          <span className="link "
                          >{item.name}</span>
                        </div>
                      )
                    })
                  }
                </dd>}
            </div>
          </dl>
        </div>

      }
      </div>
    </SerachWrapper >
  )
})
