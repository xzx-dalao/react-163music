import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

import { getSizeImage } from '@/utils/format-utils'

import {usePlayMusic,useAddMusic,usePlayAllMusic} from '../../hooks/music-handle'
import { changeRankingCurrentIndexAction } from '@/pages/discover/c-pages/ranking/store/actionCreators'
import { TopRankingWrapper } from './style'

export default memo(function XZXTopRanking(props) {
  //state
  const { info, moreLink, currentIndex } = props
  const { tracks = [] } = info;
  //redux hook
  const dispatch = useDispatch()

  //自定义hook
  const playAllMusic = usePlayAllMusic()
  const playMusic = usePlayMusic()
  const addMusic = useAddMusic()

  //order handle
  const selectIndex = (currentIndex) => {
    dispatch(changeRankingCurrentIndexAction(currentIndex))
  }
  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl)} alt="" />
          <a href="/todo" className="image_cover">ranking</a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02" onClick={e => playAllMusic(tracks.map(item => item))}></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">{item.name}</span>
                  <div className="operate">
                    <button className="btn sprite_02 play"
                     onClick={e => playMusic(item.id)}
                    ></button>
                    <button className="btn sprite_icon2 addto"
                      onClick={e => addMusic(item.id)}></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <Link to={moreLink} onClick={e => selectIndex(currentIndex)}>查看全部 &gt;</Link>
      </div>
    </TopRankingWrapper>
  )
})
