import React, { memo } from 'react';

import XZXPlayHeader from './c-cpns/play-header';
import XZXPlayList from './c-cpns/play-list';
import XZXLyricPanel from './c-cpns/lyric-panel';
import { PanelWrapper } from './style';

export default memo(function HYAppPlayList() {

  return (
    <PanelWrapper > 
      <XZXPlayHeader/>
      <div className="main">
        <img className="image" src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt=""/>
        <XZXPlayList />
        <XZXLyricPanel/>
      </div>
    </PanelWrapper>
  )
})
