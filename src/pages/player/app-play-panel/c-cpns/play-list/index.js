import React, { memo } from "react";
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { useDownMusic,usePlayMusic } from '@/hooks/music-handle'
import { formatMinuteSecond } from '@/utils/format-utils';
import {
  changePlayListAction
} from '../../../store/actionCreators';
import { PlayListWrapper } from './style';

export default memo(function HYPlayList() {
  //redux
  const { playList, currentSongIndex } = useSelector(state => ({
    playList: state.getIn(["player", "playList"]),
    currentSongIndex: state.getIn(["player", "currentSongIndex"])
  }), shallowEqual);

  //redux hooke
  const dispatch = useDispatch()

  //自定义hook
  const switchPlay =usePlayMusic()
  const downOneMusic = useDownMusic()

  //其他handle
  const clearOneMusic = (e, id) => {
    //防止事件冒泡
    e.stopPropagation();
    const currentSongIndex = playList.findIndex(song => song.id === id)
    playList.splice(currentSongIndex, 1)
    const newPlayList = [...playList];
    dispatch(changePlayListAction(newPlayList))
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
