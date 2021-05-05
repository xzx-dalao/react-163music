import React, { memo } from 'react'
import propTypes from 'prop-types'
import { usePlayMusic, useAddMusic,useDownMusic } from '@/hooks/music-handle'

import { PlayCircleOutlined } from '@ant-design/icons'
import { SingleSongItemWrapper } from './style'

function SingleSongItem(props) {

  const { songId, songName, songAlia, singer, album, duration, tns } = props

  //自定义hook
  const addPlaylist = useAddMusic()
  const playMusic = usePlayMusic()
  const downPlaylist=useDownMusic()
  return (
    <SingleSongItemWrapper>
      <div className="song-name">
        <PlayCircleOutlined onClick={() => playMusic(songId)} />
        <div className="name">{songName}
          {
            songAlia.length !== 0 ? <span className="alia text-nowrap">&nbsp;-&nbsp;({songAlia})</span> : null
          }
          {
            tns ? <span className="alia text-nowrap">&nbsp;-&nbsp;({tns})</span> : null
          }
        </div>
      </div>
      <div className="operate">
        <button
          href="/discover/recommend"
          className="btn sprite_icon2  addto"
          onClick={e => addPlaylist(songId)}
        ></button>
        <button className="btn sprite_02 favor"></button>
        <button className="btn sprite_icon2 share"></button>
        <button className="btn sprite_table down"
        onClick={e => downPlaylist(songId)}></button>
      </div>
      <div className="singer">{singer}</div>
      <div className="text-nowrap album">{
        album !== '' ? <div>《{album}》</div> : null
      }
      </div>
      <div className="text-nowrap duration">{duration}</div>
    </SingleSongItemWrapper>
  )
}

SingleSongItem.propTypes = {
  songId: propTypes.number.isRequired,
  songName: propTypes.string.isRequired,
  singer: propTypes.string.isRequired,
  album: propTypes.string.isRequired,
  duration: propTypes.string.isRequired,
}

export default memo(SingleSongItem)
