import React, { memo } from 'react'
import propTypes from 'prop-types'
import { getSizeImage } from '@/utils/format-utils'
import { AlbumItemWrapper } from './style'

function SingerItem(props) {
  // props/state
  const { coverPic, singer, accountId } = props
  return (
    <AlbumItemWrapper>
      <div className="cover-pic">
        <img src={getSizeImage(coverPic, 130)} alt="404" />
        <span className="image_cover"></span>
      </div>
      <p className="singer-info">
        <span>{singer}</span>
        {
          accountId ?
            <i className="sprite_icon2 singer_icon"></i> : null//判断是不是用户
        }
      </p>
    </AlbumItemWrapper>
  )
}

SingerItem.propTypes = {
  coverPic: propTypes.string.isRequired,
  singer: propTypes.string.isRequired,
}

export default memo(SingerItem)
