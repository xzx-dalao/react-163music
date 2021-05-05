import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import qs from 'qs';
import {
    getSearchDjRadiosListAction,
    getSearchTypeAction
} from '../../store/actionCreators'
import { DjRadiosListWrapper } from './style'
import XZXThemeCover from '@/components/djradios-cover';

export default memo(function XZXDj(props) {
    // props/state
    const { song, type } = qs.parse(props.location.search.substr(1))
    // redux hook
    const dispatch = useDispatch()
    const { djRadiosList } = useSelector((state) => ({
        djRadiosList: state.getIn(['search', 'djRadiosList']),
    }), shallowEqual)
    const djRadios = djRadiosList.djRadios || null;
    //hook
    useEffect(() => {
        // 传递歌曲发送网络请求
        if (song) dispatch(getSearchDjRadiosListAction(song, 20, type))
        dispatch(getSearchTypeAction(type))
    }, [dispatch, song, type])
    return (
        <DjRadiosListWrapper>
            <div className="DjRadios-list">
                {
                    djRadios&&djRadios.map((item, index) => {
                        return (
                            <XZXThemeCover info={item} key={item.id} right="30px" />
                        )
                    })
                }
            </div>
        </DjRadiosListWrapper>
    )
})
