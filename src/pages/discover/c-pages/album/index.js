import React, { memo } from 'react';

import XZXHotAlbum from './c-cpns/hot-album';
import XZXAllAlbum from './c-cpns/all-album';
import {
  AblumWrapper
} from './style';

export default memo(function XZXAlbum() {
  return (
    <AblumWrapper className="wrap-v2">
      <XZXHotAlbum />
      <XZXAllAlbum />
    </AblumWrapper>
  )
})
