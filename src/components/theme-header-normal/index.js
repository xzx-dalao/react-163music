import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import {
  changeAlubumsCategoryAction,
  getAllAlbumsAction,
  changePageAction
}
  from '@/pages/discover/c-pages/album/store'

import {
  HeaderWrapper
} from "./style";
const XZXThemeHeaderNormal = memo(function (props) {

  const { title, keywords } = props;
  const dispatch = useDispatch()
  const selectCategory = (name) => {
    switch (name) {
      case '全部':
        dispatch(changeAlubumsCategoryAction('ALL'))
        dispatch(getAllAlbumsAction(1))
        dispatch(changePageAction(1))//每次重新选择分类时候重新改当前页数为1
        break;
      case '华语':
        dispatch(changeAlubumsCategoryAction('ZH'))
        dispatch(getAllAlbumsAction(1))
        dispatch(changePageAction(1))
        break;
      case '欧美':
        dispatch(changeAlubumsCategoryAction('EA'));
        dispatch(getAllAlbumsAction(1))
        dispatch(changePageAction(1))
        break;
      case '韩国':
        dispatch(changeAlubumsCategoryAction('KR'));
        dispatch(getAllAlbumsAction(1))
        dispatch(changePageAction(1))
        break;
      case '日本':
        dispatch(changeAlubumsCategoryAction('JP'));
        dispatch(getAllAlbumsAction(1))
        dispatch(changePageAction(1))
        break;
      default:
        break;
    }

  }

  return (
    <HeaderWrapper>
      <div className="left">
        <div className="title">{title}</div>
        <div className="keyword">
          {
            keywords.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <span className="link" onClick={e => selectCategory(item)}>{item}</span>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
    </HeaderWrapper>
  )
})
XZXThemeHeaderNormal.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}
XZXThemeHeaderNormal.defaultProps = {
  keywords: []
}

export default XZXThemeHeaderNormal