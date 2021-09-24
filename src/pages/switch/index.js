// import React, { memo, useState } from 'react'
// import { shallowEqual, useSelector, useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom'

// import { NavLink, Redirect } from 'react-router-dom'
// import { renderRoutes } from 'react-router-config'
// import { Input } from 'antd'
// import {
//     getSearchListAction_kw,

// } from './store/actionCreators'
// import { switchCategories } from '@/common/local-data'


// import { SearchWrapper } from './style'

// export default memo(function XZXSwitch(props) {
//   const { route } = props;
//   const history = useHistory();
//     //state
//     const [searchSongName, setSearchSongName] = useState(null)// 搜索歌曲名字
//     const [activeIndex, setActiveIndex] = useState(null)//菜单栏/  
//     const [tabTitle, setTabTitle] = useState('single')
//     //hook
//     const dispatch = useDispatch()

//     //redux 
//     const { searchList } = useSelector(state => ({
//         searchList: state.getIn(["switch", "searchList"]),
//     }), shallowEqual)

//     const searchHandle = () => {
//         dispatch(getSearchListAction_kw(searchSongName))
//         history.push(`/switch/${tabTitle}?song=${searchSongName}`)
//     }
//     const setOnclick = (index,name) => {
//         setActiveIndex(index)
//         setTabTitle(name)
      
//     }

//     return (
//         <SearchWrapper>
//             <div className="wrap-v2 content">
//                 <div className="search-bar sprite_03">
//                     <Input
//                         bordered={false}
//                         style={{ width: 490 }}
//                         onChange={(e) => setSearchSongName(e.target.value)}
//                     />
//                     <div className="search-bar search-warper">
//                         <div className="search-bar search-icon sprite_03" onClick={(e) => searchHandle(e)}></div>
//                     </div>
//                 </div>
//                 <div >
//                 </div>

//                 <div className="search-content">
//                     <div className="search-info">
//                         搜索"{searchSongName}", 找到{searchList.total}首
//                     </div>
//                     <div className="m-tab search-category">
//                         {switchCategories.map((item, index) => {
//                            return (
//                             <NavLink
//                                 key={index}
//                                 to={item.link + `?song=${searchSongName}`}
//                                 onClick={() => setOnclick(index, item.name)}
//                                 className={`route-item m-tab ${activeIndex === index ? 'active' : ''}`}
//                             >
//                                 {activeIndex === index ? <Redirect to={item.link + `?song=${searchSongName}`} /> : null}
//                                 <em>{item.title}</em>
//                             </NavLink>
//                         )

//                         })}
//                     </div>
//                     {renderRoutes(route.routes)}
//                 </div>
//             </div>
            
//         </SearchWrapper>
//     )
// })
