import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
    playList: [],
    currentSongIndex: 0,
    currentSong: {},
    sequence: 0, //0循环/1随机/2单曲
    lyricList: [],
    currentLyricIndex: 0,
    stop:false
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CURRENT_SONG:
            return state.set("currentSong", action.currentSong);
        case actionTypes.CHANGE_PLAY_LIST:
            return state.set("playList", action.playList);
        case actionTypes.CHANGE_CURRENT_SONG_INDEX:
            return state.set("currentSongIndex", action.index);
        case actionTypes.CHANGE_SEQUENCE:
            return state.set("sequence", action.sequence)
        case actionTypes.CHANGE_LYRIC_LIST:
            return state.set("lyricList", action.lyricList)
        case actionTypes.CHNAGE_CURRENT_LYRIC_INDEX:
            return state.set("currentLyricIndex", action.index)
            case actionTypes.CHANGE_STOP:
                return state.set("stop", action.stop)
        default:
            return state;
    }
}

export default reducer;