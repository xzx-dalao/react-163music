import React, { memo } from 'react'
import { XZXArtistWrapper } from './style'
import XZXArtistCategory from './c-cpns/artist-category';
export default memo(function XZXArtist() {
    return (
        <XZXArtistWrapper>
            <div className="content wrap-v2">
                <XZXArtistCategory />
            </div>
        </XZXArtistWrapper>
    )
})
