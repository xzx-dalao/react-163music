import React, { memo } from 'react';

import HYPlayHeader from './c-cpns/play-header';
import HYPlayList from './c-cpns/play-list';
import HYLyricPanel from './c-cpns/lyric-panel';
import { PanelWrapper } from './style';

export default memo(function HYAppPlayList() {



  return (
    <PanelWrapper   onClick={(e) => e.stopPropagation()}> 
      <HYPlayHeader/>
      <div className="main">
        <img className="image" src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt=""/>
        <HYPlayList />
        <HYLyricPanel/>
      </div>
    </PanelWrapper>
  )
})
