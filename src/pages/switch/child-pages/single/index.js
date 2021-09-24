
// import React, { memo } from 'react'
// import { shallowEqual, useSelector } from 'react-redux'
// import qs from 'qs'
// import { SingleSongWrapper } from './style'
// import SingleSongItem from './singleitem'

// export default memo(function XZXSwitchSingle(props) {
//   const { song } = qs.parse(props.location.search.substr(1))
 
//   // redux hook
//   const { searchList } = useSelector((state) => ({
//     searchList: state.getIn(['switch', 'searchList']),
//   }), shallowEqual)
//   const songslist = searchList.list || null;

//   return (
//     <SingleSongWrapper>
//       {songslist && songslist.map((item, index) => {
//         return (
//           <SingleSongItem
//             key={index}
//             info={item}
//             song={song}
//           />
//         )
//       })}
//     </SingleSongWrapper>
//   )
// })
