import { Map } from 'immutable'

import * as actionTypes from './constants'
const defaultState = Map({
    playList: [],
    currentSongIndex: 0,
    currentSong: {},
    currentSong_kw: {},
    sequence: 0, //0单曲循环/1随机/2列表循环
    lyricList: [],
    currentLyricIndex: 0,
    stop: false,
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CURRENT_SONG:
            //存当前播放哪一首到localStorage      
            window.localStorage.setItem('windowCurrentSong', JSON.stringify(action.currentSong))
            return state.set("currentSong", action.currentSong);
        case actionTypes.CHANGE_PLAY_LIST:
            //存PlayList到localStorage
            window.localStorage.setItem('windowPlayList', JSON.stringify(action.playList))
            return state.set("playList", action.playList)
        case actionTypes.CHANGE_CURRENT_SONG_INDEX:
            //存当前播放哪一首index到localStorage
            window.localStorage.setItem('windowCurrentSongIndex', JSON.stringify(action.index))
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