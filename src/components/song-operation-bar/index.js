import React, { memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getSongDetailAction } from '@/pages/player/store'

import { OperationBarWrapper } from './style';

export default memo(function XZXSongOperationBar(props) {
  //state
  const { favorTitle, shareTitle, downloadTitle, commentTitle } = props;

  //redux hook
  const state = useSelector(state => ({
    playList: state.getIn(["ranking", "playList"]),
  }), shallowEqual);
  const dispatch = useDispatch()
  const listInfo = state.playList.trackIds || []

  //order handle
  const playMusic = () => {
    //点击后播放第一首
    dispatch(getSongDetailAction(listInfo[0].id))

  }
  return (
    <OperationBarWrapper>
      <div className="play">
        <span className="play-icon sprite_button" onClick={e => playMusic()}>
          <span className="play sprite_button">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </span>
        <span className="add-icon sprite_button">+</span>
      </div>
      <a href="/abc" className="item sprite_button">
        <i className="icon favor-icon sprite_button">{favorTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon share-icon sprite_button">{shareTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon download-icon sprite_button">{downloadTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon comment-icon sprite_button">{commentTitle}</i>
      </a>
    </OperationBarWrapper>
  )
})
