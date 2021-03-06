import React, { memo } from 'react';
import { useSelector, shallowEqual } from "react-redux";
import { usePlayMusic, useAddMusic, useDownMusic } from '@/hooks/music-handle'
import {
  getSizeImage,
  formatMinuteSecond
} from "@/utils/format-utils.js"

import XZXThemeHeaderSong from '@/components/theme-header-song';
import {
  RankingListWrapper
} from './style';

export default memo(function XZXRankingList() {
  const state = useSelector(state => ({
    playList: state.getIn(["ranking", "playList"])
  }), shallowEqual);
  const tracks = state.playList.tracks || [];
  //自定义hook
  const addPlaylist = useAddMusic()
  const playMusic = usePlayMusic()
  const downPlaylist = useDownMusic()
  return (
    <RankingListWrapper>
      <XZXThemeHeaderSong />
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {
              tracks.map((item, index) => {
                return (
                  <tr className="" key={item.id}>
                    <td>
                      <div className="rank-num">
                        {/* 索引 */}
                        <span className="num">{index + 1}</span>
                        {/* new */}
                        <span className="new sprite_icon2"></span>
                      </div>
                    </td>
                    <td>
                      <div className="song-name">
                        {
                          // 前三列变大
                          index < 3 ?
                            (<img src={getSizeImage(item.al.picUrl, 50)} alt="" />) : null
                        }
                        {/* 播放按钮 */}
                        <span className="play sprite_table"  onClick={() => playMusic(item.id)}></span>
                        {/* 歌名 {item.alia[0]*/}
                        <span className="name text-nowrap">
                          {item.name}
                          {
                            item.alia[0] ? <span className="text text-nowrap">&nbsp;-&nbsp;({item.alia[0]})</span> : null
                          }
                          {
                            item.tns ? <span className="text text-nowrap">&nbsp;-&nbsp;({item.tns[0]})</span> : null
                          }
                        </span>

                      </div>
                    </td>
                    {/* 时长 */}
                    <td >
                      <div className="time">{formatMinuteSecond(item.dt)}
                      <div className="operate opt">
                        <button className="btn sprite_icon2  addto"
                        onClick={e => addPlaylist(item.id)}
                        ></button>
                        <button className="btn sprite_02 favor"></button>
                        <button className="btn sprite_icon2 share"></button>
                        <button className="btn sprite_table down"
                        onClick={e => downPlaylist(item.id)}
                        ></button>
                      </div>
                      </div>
                    </td>
                    {/* 歌手 */}
                    <td className="singer text-nowrap">{item.ar[0].name}
                      <span>{item.ar[1] ? <span>/{item.ar[1].name}</span> : null}</span>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  )
})

