import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import classNames from "classnames";
import { getSizeImage } from "@/utils/format-utils";

import {withRouter } from 'react-router-dom'
import {
    changeRankingCurrentIndexAction,
    getRankingListAction
} from '../../store/actionCreators'

import {
    TopRankingWrapper
} from "./style";

export default withRouter(memo(function XZXTopRanking(props) {
    //redux hook
    const { topList, currentIndex } = useSelector(state => ({
        topList: state.getIn(["ranking", "topList"]),
        currentIndex: state.getIn(["ranking", "currentIndex"])
    }), shallowEqual);
    const dispatch = useDispatch();

    //其他hook
    useEffect(() => {
        props.history.listen(() => {
            /*监听页面回到顶部 */
            if (document.body.scrollTop || document.documentElement.scrollTop > 0) {
              window.scrollTo(0, 0)}
        })
        const id = (topList[currentIndex] && topList[currentIndex].id);
        // console.log(id)
        if (!id) return;
        dispatch(getRankingListAction(id))
    }, [dispatch, topList, currentIndex,props.history])

    const hanldeItemClick = (index) => {
        // console.log(index)
        dispatch(changeRankingCurrentIndexAction(index))
    }


    return (
        <TopRankingWrapper>
            {
                topList.map((item, index) => {
                    let header;
                    if (index === 0 || index === 4) {
                      header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
                    }
                    return (
                        <div key={item.id}>
                        {header}
                        <div className={classNames("item", { "active": index === currentIndex })}
                          onClick={e => hanldeItemClick(index)}>
                          <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                          <div className="info">
                            <div className="name">{item.name}</div>
                            <div className="update">{item.updateFrequency}</div>
                          </div>
                        </div>
                      </div>
                    )
                })

            }
        </TopRankingWrapper>
    )
}))
