import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
    searchSongList: [],
    searchSuggestValue: [],
    searchValue: [],
    singerList: [],
    albumList: [],
    playList: [],
    djRadiosList: [],
    searchLength: [],
    searchType: [],
    focusState: false,
    smallSongsList: [],
    changePage: 1

})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_SEARCH_VALUE:
            return state.set("searchSuggestValue", action.searchSuggestValue);
        case actionTypes.GET_SEARCH_VALUE:
            return state.set("searchValue", action.searchValue);
        case actionTypes.GET_SEARCH_TYPE:
            return state.set("searchType", action.searchType);
        case actionTypes.CHANGE_FOCUS_STATE:
            return state.set('focusState', action.focusState)

        case actionTypes.CHANGE_SMALL_SEARCH_SONG_LIST:
            return state.set("smallSongsList", action.smallSongsList);

        case actionTypes.CHANGE_SEARCH_SONG_LIST:
            return state.set('searchSongList', action.searchSongList)
        case actionTypes.CHANGE_SINGER_LIST:
            return state.set('singerList', action.singerList)
        case actionTypes.CHANGE_ALBUM_LIST:
            return state.set('albumList', action.albumList)
        case actionTypes.CHANGE_DJ_LIST:
            return state.set('djRadiosList', action.djRadiosList)
        case actionTypes.CHANGE_SONGS_LIST:
            return state.set('playList', action.playList)

        case actionTypes.CHANGE_PAGE_NUM:
            return state.set("changePage", action.changePage);
        case actionTypes.CHANGE_SEARCH_LENGTH:
            return state.set('searchLength', action.searchLength)
        default:
            return state;
    }
}

export default reducer;