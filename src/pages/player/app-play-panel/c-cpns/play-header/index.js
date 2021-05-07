import React, { memo } from 'react';
import { useSelector, shallowEqual,useDispatch } from 'react-redux';

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style';
import {
  changePlayListAction,
}from '../../../store/actionCreators'
export default memo(function XZXPlayHeader() {
  const { playList, currentSong } = useSelector(state => ({
    playList: state.getIn(["player", "playList"]),
    currentSong: state.getIn(["player", "currentSong"])
  }), shallowEqual);
  const dispatch = useDispatch()
  const clearAllPlaylist = () => {
    dispatch(changePlayListAction([]));
    localStorage.clear();
    // window.localStorage.setItem('windowCurrentSong',0)
    // window.localStorage.setItem('windowPlayList',0)
    // window.localStorage.setItem('windowCurrentSongIndex',0)
  };
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <h3>播放列表({playList.length})</h3>
        <div className="operator">
          <button>
            <i className="playlist_sprite icon favor"></i>
            收藏全部
          </button>
          <button onClick={e => clearAllPlaylist()}>
            <i className="playlist_sprite icon remove"></i>
            清除
            
          </button>
        </div>
      </HeaderLeft>
      <HeaderRight>
        {currentSong.name}
      </HeaderRight>
    </HeaderWrapper>
  )
})
