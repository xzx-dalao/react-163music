import React, { memo } from 'react'

import {
    PlayerWrapper,
    PlayerLeft,
    PlayerRight
} from './style'

export default memo(function XZXplayer() {
    return (
        <PlayerWrapper>
         <div className="content wrap-v2">
                <PlayerLeft>
                    <h2>XZXPlayerInfo</h2>
                    <h2>XZXSongContent</h2>
                </PlayerLeft>
                <PlayerRight>
                    <h2>XZXSimiPlaylist</h2>
                    <h2>XZXSimiSong</h2>
                    <h2>Download</h2>
                </PlayerRight>
            </div>
        </PlayerWrapper>
    )
})
