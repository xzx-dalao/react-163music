import React, { memo } from "react";
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { useDownMusic, usePlayMusic } from '@/hooks/music-handle'
import { formatMinuteSecond } from '@/utils/format-utils';
import {
  changePlayListAction,
  changeCurrentSongIndexAction,
  changeCurrentSongAction
} from '../../../store/actionCreators';
import { PlayListWrapper } from './style';

export default memo(function XZXPlayList() {
  //redux
  const { playList, currentSongIndex, currentSong } = useSelector(state => ({
    playList: state.getIn(["player", "playList"]),
    currentSongIndex: state.getIn(["player", "currentSongIndex"]),
    currentSong: state.getIn(["player", "currentSong"])
  }), shallowEqual);

  //redux hooke
  const dispatch = useDispatch()

  //自定义hook
  const switchPlay = usePlayMusic()
  const downOneMusic = useDownMusic()

  //其他handle
  const clearOneMusic = (e, id) => {
    //防止事件冒泡
    e.stopPropagation();
    var currentSongIndex = playList.findIndex(song => song.id === id)
    playList.splice(currentSongIndex, 1)
    const newPlayList = [...playList];
    dispatch(changePlayListAction(newPlayList))

    // const currentSong1 = JSON.parse(window.localStorage.getItem('windowCurrentSong'))
    // const songidlist = JSON.parse(window.localStorage.getItem('windowPlayList'))
    // const lastId = songidlist.findIndex((el) => {
    //   return el.id === currentSong1.id
    // })

    //点击删除的逻辑，还能切换到下一首
    const lastId1 = newPlayList.findIndex((el) => {
      return el.id === currentSong.id
    })
    //同步到local storage
    if (lastId1 !== -1) dispatch(changeCurrentSongIndexAction(lastId1))
    else {
      if (currentSongIndex > 0) {
        currentSongIndex = currentSongIndex - 1
      } else {
        if (currentSongIndex === 0) return currentSongIndex
        currentSongIndex = currentSongIndex + 1
      }
      //判断id有没有越界
      const songId = newPlayList[currentSongIndex]
      if (!songId || newPlayList.length === 0) {
        return;
      }
      //取到id，切换歌曲
      dispatch(changeCurrentSongAction(songId))
      dispatch(changeCurrentSongIndexAction(currentSongIndex))
      //bug:清空播放列表时候或者点击删除这首歌时候，歌曲还在播放！！！（
    }
  }

  return (
    <PlayListWrapper>
      {
        playList && playList.map((item, index) => {
          return (
            <div key={item.id}
              onClick={e => switchPlay(item.id)}
              className={classNames("play-item", { "active": currentSongIndex === index })}>
              <div className="left text-nowrap">{item.name}</div>
              <div className="operate">
                <button className="btn playlist_sprite favor"></button>
                <button className="btn playlist_sprite share"></button>
                <button className="btn playlist_sprite down"
                  onClick={e => downOneMusic(item.id)}>
                </button>
                <button className="btn playlist_sprite delete"
                  onClick={e => clearOneMusic(e, item.id)}>
                </button>
              </div>
              <div className="right">
                <span className="singer text-nowrap">{item.ar[0].name}</span>
                <span className="duration">{formatMinuteSecond(item.dt)}</span>
                <span className="playlist_sprite link"></span>
              </div>
            </div>
          )
        })
      }
    </PlayListWrapper>
  )
})
