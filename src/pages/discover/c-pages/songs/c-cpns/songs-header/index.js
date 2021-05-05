import React, { memo, useState } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import XZXSongsCategory from '../songs-category'

import {
  changeCurrentOrderAction, 
  changeCurrentPanelAction,
  getSongList,
  changePageAction
} from '../../store/actionCreators'
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from "./style";
export default memo(function XZXSongsHeader() {
  //state
  const [order, setOrder] = useState(false)
  //redux hooks
  const { currentCategory,currentPanel } = useSelector(state => ({
    currentCategory: state.getIn(["songs", "currentCategory"]),
    currentPanel:state.getIn(["songs", "currentPanel"])
  }), shallowEqual)
  const dispatch = useDispatch()
  //order
  const newOrhot = order ? 'hot' : 'new'

  const selectShowCategory = show=>{
    dispatch(changeCurrentPanelAction(!currentPanel))
  }
  function selectCategoryOrder(newOrhot) {
    setOrder(!order)
    dispatch(changeCurrentOrderAction(newOrhot))
    dispatch(getSongList(0));
    dispatch(changePageAction(1))//每次重新选择分类时候重新改当前页数为1
  }
  return (

    <HeaderWrapper>
      <HeaderLeft>
        <span className="title">{currentCategory}</span>
        <button className="select" onClick={e => selectShowCategory(currentPanel)}>
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </button>
        {currentPanel ? <XZXSongsCategory /> : null}
      </HeaderLeft>
      <HeaderRight>
        <button className="hot" onClick={e => selectCategoryOrder(newOrhot)}>{newOrhot}</button>
      </HeaderRight>
    </HeaderWrapper>
  )
})
