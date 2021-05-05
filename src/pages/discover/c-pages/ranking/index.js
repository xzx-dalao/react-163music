import React, { memo, useEffect } from 'react'
import { useDispatch } from "react-redux";

import { getTopListAction } from "./store/actionCreators";

import XZXTopRanking from "./c-cpns/top-ranking";
import XZXRankingHeader from './c-cpns/ranking-header';
import XZXRankingList from './c-cpns/ranking-list';
import {
  RankingWrapper,
  RankingLeft,
  RankingRight,
} from "./style";
export default memo(function XZXRanking() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopListAction())
  }, [dispatch])

  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <XZXTopRanking />
      </RankingLeft>
      <RankingRight>
        <XZXRankingHeader />
        <XZXRankingList />
      </RankingRight>
    </RankingWrapper>
  )
})
