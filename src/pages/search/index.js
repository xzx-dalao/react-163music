import React, { memo, useState, useEffect } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

import { NavLink, Redirect } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Input } from 'antd'
import {
    getSearchSongListAction,
    getSearchValueAction,
    changePageAction
} from './store/actionCreators'

import { searchCategories } from '@/common/local-data'
import { useChangeDropBoxState } from '@/hooks/change-state'
import { SearchWrapper } from './style'

export default memo(function XZXSearch(props) {
    //order
    const { route } = props;
    const history = useHistory();

    //state
    const [searchSongName, setSearchSongName] = useState(null)// 搜索歌曲名字
    const [activeIndex, setActiveIndex] = useState(null)//菜单栏
    const [tabTitle, setTabTitle] = useState(null)
    const [tabName, setTabName] = useState('single')
    const [unit, setNnit] = useState(null)
    //redux hooks
    const { searchValue, searchLength, searchType } = useSelector(state => ({
        searchValue: state.getIn(["search", "searchValue"]),
        searchLength: state.getIn(["search", "searchLength"]),
        searchType: state.getIn(['search', 'searchType']),
    }), shallowEqual)
    const dispatch = useDispatch()
    //hook
    useEffect(() => {
        setSearchSongName(searchValue)
        setActiveIndex(0)
        setTabTitle('单曲')
        //一开始渲染
    }, [searchValue])

    const setOnclick = (index, title, name, unit) => {
        setActiveIndex(index)
        setTabTitle(title)
        setTabName(name)
        setNnit(unit)
        dispatch(changePageAction(1))
    }
    const searchHandle = (e) => {
        dispatch(getSearchValueAction(searchSongName))
        dispatch(getSearchSongListAction(searchSongName, 30, searchType))
        history.push(`/search/${tabName}?song=${searchSongName}&type=${searchType}`)
    }

    return (
        <SearchWrapper onClick={useChangeDropBoxState()}>
            <div className="wrap-v2 content">
                <div className="search-bar sprite_03">
                    <Input
                        bordered={false}
                        value={searchSongName}
                        style={{ width: 490 }}
                        onChange={(e) => setSearchSongName(e.target.value)}

                    />
                    <div className="search-bar search-warper">
                        <div className="search-bar search-icon sprite_03" onClick={() => searchHandle()}></div>
                    </div>
                </div>
                <div >
                </div>

                <div className="search-content">
                    <div className="search-info">
                        搜索"{searchValue}", 找到
                        <span className="music-amount">{searchLength}</span>{unit}{tabTitle}
                    </div>
                    <div className="m-tab search-category">
                        {searchCategories.map((item, index) => {
                            return (
                                <NavLink
                                    key={index}
                                    to={item.link + `?song=${searchValue}&type=${item.type}`}
                                    onClick={() => setOnclick(index, item.title, item.name, item.unit)}
                                    className={`route-item m-tab ${activeIndex === index ? 'active' : ''}`}
                                >
                                    {activeIndex === index ? <Redirect to={item.link + `?song=${searchValue}&type=${item.type}`} /> : null}
                                    <em>{item.title}</em>
                                </NavLink>
                            )

                        })}
                    </div>
                    {renderRoutes(route.routes)}
                </div>
            </div>
        </SearchWrapper>
    )
})
