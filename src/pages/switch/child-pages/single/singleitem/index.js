// import React, { memo } from 'react'

// // import { usePlayMusic_kw } from '@/hooks/music-handle'
// import { PlayCircleOutlined } from '@ant-design/icons'
// import { SingleSongItemWrapper } from './style'
// import { highlightText } from '@/utils/highlightText'


// function SingleSongItem(props) {
//   const { info, song } = props


//   //自定义hook

//   // const playMusic = usePlayMusic_kw()



//   //高亮匹配
//   const songNameText = highlightText(info.name, song)
//   const singerText = highlightText(info.artist, song)
//   const albumText = highlightText(info.album, song)


//   return (
//     <SingleSongItemWrapper>
//       <div className="song-name">
//       <PlayCircleOutlined onClick={() => playMusic(info)} />
//         <div className="name text-nowrap">
//           <span dangerouslySetInnerHTML={{ __html: songNameText }} ></span>
//         </div>
//       </div>
//       <div className="operate">
//         <button className="btn sprite_icon2  addto"
//         ></button>
//         <button className="btn sprite_02 favor"></button>
//         <button className="btn sprite_icon2 share"></button>
//         <button className="btn sprite_table down"
//         ></button>
//       </div>
//       <span className="singer " dangerouslySetInnerHTML={{ __html: singerText }} ></span>
//       <div className="text-nowrap album">

//         <div>《<span dangerouslySetInnerHTML={{ __html: albumText }} ></span> 》</div>

//       </div>
//       <div className="text-nowrap duration">{info.songTimeMinutes}</div>
//     </SingleSongItemWrapper>
//   )
// }



// export default memo(SingleSongItem)
