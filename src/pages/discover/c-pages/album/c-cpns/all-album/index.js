import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { PER_PAGE_NUMBER } from '../../store/constants';
import { 
  getAllAlbumsAction,
  changePageAction 
} from '../../store/actionCreators';

import XZXPagination from '@/components/pagination';
import XZXThemeHeaderNormal from "@/components/theme-header-normal";
import XZXAlbumCover from "@/components/album-cover";
import {
  AllAlbumWrapper
} from './style';
export default memo(function XZXAllAlbum() {
  //state
  // const [currentPage, setCurrentPage] = useState(1);

  //redux hook
  const { topAlbums,total,changePage} = useSelector(state => ({
    topAlbums: state.getIn(["album", "allAlbums"]),
    total: state.getIn(["album", "allTotal"]),
    changePage: state.getIn(["album", "changePage"])
  }), shallowEqual);
  const dispatch = useDispatch()

  //hooks
  useEffect(() => {
    //默认显示
    dispatch(getAllAlbumsAction(1))
  }, [dispatch])

  //order
  function onPageChange(page, pageSize) {
    dispatch(changePageAction(page))
    dispatch(getAllAlbumsAction(page));
  }
  return (
    <AllAlbumWrapper>
      <XZXThemeHeaderNormal title="全部新碟" keywords={["全部", "华语", "欧美", "韩国", "日本"]} />
      <div className="album-list">
        {
          topAlbums.map((item, index) => {
            return <XZXAlbumCover size={"130px"}
              width={"153px"}
              bgp={"-845px"}
              imgwh={"28px"}
              icon={"-140px"}
              iconactive={"-170px"} 
              key={item.id}
              info={item} />
          })
        }
      </div>
      <XZXPagination currentPage={changePage}
        total={total}
        pageSize={PER_PAGE_NUMBER}
        onPageChange={onPageChange} />
    </AllAlbumWrapper>
  )
})
