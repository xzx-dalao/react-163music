import React, { memo } from 'react';
import {  useSelector, shallowEqual } from "react-redux";

import { usePlayAllMusic, useAddMusic, useDownMusic } from '@/hooks/music-handle'
import { OperationBarWrapper } from './style';

export default memo(function XZXSongOperationBar(props) {
  //state
  const { favorTitle, shareTitle, downloadTitle, commentTitle } = props;

  //redux hook
  const state = useSelector(state => ({
    playList: state.getIn(["ranking", "playList"]),
  }), shallowEqual);
  const listInfo = state.playList.trackIds || []

  //自定义hook
  const addPlaylist = useAddMusic()
  const playMusic = usePlayAllMusic()
  const downPlaylist = useDownMusic()

  return (
    <OperationBarWrapper>
      <div className="play">
        <span className="play-icon sprite_button" >
          <span className="play sprite_button" onClick={e => playMusic(listInfo.map(item => item))}>
            <i className="sprite_button"></i>
            <span >播放</span>
          </span>
        </span>
        <span className="add-icon sprite_button" onClick={e => addPlaylist(listInfo.map(item => item))}>+</span>
      </div>
      <div className="item sprite_button">
        <i className="icon favor-icon sprite_button">{favorTitle}</i>
      </div>
      <div className="item sprite_button">
        <i className="icon share-icon sprite_button">{shareTitle}</i>
      </div>
      <div className="item sprite_button" onClick={e => downPlaylist(listInfo.map(item => item.id))}>
        <i className="icon download-icon sprite_button">{downloadTitle}</i>
      </div>
      <div className="item sprite_button">
        <i className="icon comment-icon sprite_button">{commentTitle}</i>
      </div>
    </OperationBarWrapper>
  )
})
