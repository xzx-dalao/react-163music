import React, { memo, useState, useRef, useCallback, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';


import { headerLinks } from "@/common/local-data"

import { debounce } from '@/utils/format-utils.js';
import { NavLink } from 'react-router-dom'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

import {
    getSearchSuggestValueAction,
    getSearchValueAction,
    changeFocusStateAction
} from '@/pages/search/store/actionCreators'
import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight,
} from './style'

import XZXSearchPage from '../search'
export default memo(function XZXAppHeader() {
    //state
    const [searchValue, setSearchValue] = useState()
    const dispatch = useDispatch()
    const inputRef = useRef();

    const { focusState } = useSelector((state) => ({
        focusState: state.getIn(['search', 'focusState'])
    }), shallowEqual);
    //hook
    useEffect(() => {
        if (focusState) inputRef.current.focus();
        else inputRef.current.blur();
    }, [focusState]);

    // 页面代码
    const showSelectItem = (item, index) => {
        if (index < 3) {

            return (
                <NavLink to={item.link}>
                    {item.title}
                    <i className="sprite_01 icon"></i>
                </NavLink>
            )
        } else {
            return <a href={item.link}>{item.title}</a>
        }
    }
    //order
    const changeInput = debounce((target) => {
        let val = target.value.trim();
        setSearchValue(val)
        if (val.length < 1) {
            dispatch(changeFocusStateAction(false))
            return;
        } else {
            dispatch(changeFocusStateAction(true))
        }
        dispatch(getSearchValueAction(val))
        dispatch(getSearchSuggestValueAction(val))
    }, 400);
    // 获取焦点


    const handleFocus = useCallback(() => {
        // 有值才打开
        // inputRef.current.select();
        if (searchValue) {
            dispatch(changeFocusStateAction(true))
        }
    }, [searchValue, dispatch]);
    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="#/" className="logo sprite_01">网易云音乐</a>
                    <div className="select-list">
                        {
                            headerLinks.map((item, index) => {
                                return (
                                    <div key={item.title} className="select-item">
                                        {showSelectItem(item, index)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input
                        ref={inputRef}
                        className="search"
                        placeholder="音乐/视频/电台/用户"
                        prefix={<SearchOutlined />}
                        onInput={({ target }) => changeInput(target)}
                        onFocus={handleFocus}
                    />
                    {focusState && <XZXSearchPage />}
                    <div className="center">创作者中心</div>
                    <div>登录</div>

                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})
