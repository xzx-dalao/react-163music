import React, { memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import classNames from 'classnames';

import { artistCategories } from '@/common/local-data';
import { CategoryWrapper, CategoryItem } from './style';
import { changeCurrentAreaAction, changeCurrentTypeAction } from '../../store/actionCreators';

export default memo(function XZXArtistCategory() {
    // redux hooks
    const { currentArea, currentType } = useSelector(state => ({
        currentArea: state.getIn(["artist", "currentArea"]),
        currentType: state.getIn(["artist", "currentType"])
    }), shallowEqual);
    const dispatch = useDispatch();

    // handle function
    const selectArtist = (area, type) => {
        dispatch(changeCurrentAreaAction(area));
        dispatch(changeCurrentTypeAction(type));
    }
    return (
        <CategoryWrapper>
            {
                artistCategories.map((item, index) => {
                    return (
                        <div className="section" key={item.area}>
                            <h2 className="title">{item.title}</h2>
                            {
                                item.artists.map((iten, index) => {
                                    const isSelect = currentArea === item.area && currentType.type === iten.type;
                                    return (
                                        <CategoryItem key={iten.name}
                                            className={classNames({ "active": isSelect })}>
                                            <span onClick={e => selectArtist(item.area, iten)}>{iten.name}</span>
                                        </CategoryItem>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </CategoryWrapper>
    )
})
