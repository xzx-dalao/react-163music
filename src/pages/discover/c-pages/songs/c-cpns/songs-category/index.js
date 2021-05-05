import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  getCategoryAction,
  changeCurrentCategoryAction,
  getSongList,
  changeCurrentPanelAction,
  changePageAction
} from '../../store/actionCreators'
import { CategoryWrapper } from './style'

export default memo(function XZXSongsCategory() {
  //redux hook
  const { category,currentPanel } = useSelector(state => ({
    category: state.getIn(["songs", "category"]),
    currentPanel:state.getIn(["songs", "currentPanel"])
  }), shallowEqual);
  const dispatch = useDispatch();

  //其他hook
  useEffect(() => {
    dispatch(getCategoryAction())
  }, [dispatch])

  //order
  const selectCategory = (name) => {
    dispatch(changeCurrentCategoryAction(name));
    dispatch(getSongList(0));
    dispatch(changeCurrentPanelAction(!currentPanel))
    dispatch(changePageAction(1))//每次重新选择分类时候重新改当前页数为1
}

  return (
    <CategoryWrapper>
      <div className="arrow sprite_icon"></div>
      <div className="all">
        <span  onClick={e => selectCategory("全部")}>全部风格</span>
      </div>
      <div className="category">
        {
          category.map((item, index) => {
            return (
              <dl key={item.name} className={"item" + index}>
                {/* 左边 */}
                <dt>
                  <i className="icon sprite_icon2"></i>
                  <span>{item.name}</span>
                </dt>
                {/* 右边 */}
                <dd>
                  {
                    item.subs.map(sItem => {
                      return (
                        <div className="item" key={sItem.name}>
                           <span className="link"  onClick={e => selectCategory(sItem.name)}>{sItem.name}</span>
                          <span className="divider">|</span>
                        </div>
                      )
                    })
                  }
                </dd>
              </dl>
            )
          })
        }
      </div>
    </CategoryWrapper>
  )
})
