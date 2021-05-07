import { getSongDetail, getLyric } from '@/services/player'
import { getRandomNumber } from '@/utils/math-utils'
import { parseLyric } from '@/utils/parse-lyric';
import * as actionTypes from './constants'

//当前歌曲的信息
export const changeCurrentSongAction = (currentSong) => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong
})

//播放列表
export const changePlayListAction = (playList) => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList
})
//当前播放歌曲的index
export const changeCurrentSongIndexAction = (index) => ({
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    index
});

//播放模式
export const changeSequenceAction = (sequence) => ({
    type: actionTypes.CHANGE_SEQUENCE,
    sequence
})


//切歌
export const changeCurrentIndexAndSongAction = (tag) => {
    return (dispatch, getState) => {
        const playList = getState().getIn(["player", "playList"])
        const sequence = getState().getIn(["player", "sequence"])//当前播放模式
        let currentSongIndex = getState().getIn(["player", "currentSongIndex"])
        if (!playList.length) {
            dispatch(changeStopAction(true))
            return;
        };
        // console.log(currentSongIndex)
        switch (sequence) {
            case 1://随机播放
                let randomIndex = getRandomNumber(playList.length);
                while (randomIndex === currentSongIndex) {
                    randomIndex = getRandomNumber(playList.length)
                }
                currentSongIndex = randomIndex
                break
            default://顺序播放和单曲循环
                currentSongIndex += tag
                if (currentSongIndex >= playList.length) currentSongIndex = 0//一直点下一个
                if (currentSongIndex < 0) currentSongIndex = playList.length - 1//一直点上一个
        }
        
        const currentSong = playList[currentSongIndex]
        dispatch(changeCurrentSongAction(currentSong))
        dispatch(changeCurrentSongIndexAction(currentSongIndex))

        //请求歌词
        dispatch(getLyricAction(currentSong.id))
    }
}
//播放stop
export const changeStopAction = (stop) => ({
    type: actionTypes.CHANGE_STOP,
    stop
})
//播放歌曲
export const getSongDetailAction = (ids) => {
    if (!ids) return;
    return (dispatch, getState) => {
        //把localStorage的数据给playlist，（防止刷新）
        var playList = getState().getIn(["player", "playList"]);

        // if (playList.length === 0) {
        //     try {
        //         var playList1 = JSON.parse(window.localStorage.getItem('windowPlayList'))
        //         playList = playList1;
        //     } catch (error) {
        //       console.log(error)
        //     }
        // }
        //根据id查找playlist中是否已经有了该歌曲
        const songIndex = playList.findIndex(song => song.id === ids);
        //判断是否找到歌曲
        let song = null;
        if (songIndex !== -1) { //如果没有符合条件的元素返回 -1
            dispatch(changeCurrentSongIndexAction(songIndex));
            song = playList[songIndex];
            dispatch(changeCurrentSongAction(song));
            dispatch(getLyricAction(song.id))
        } else {
            getSongDetail(ids).then(res => {
                //请求歌曲数据
                song = res.songs && res.songs[0];
                if (!song) return;

                //将最新请求的歌曲添加到播放列表
                const newPlayList = [...playList];
                newPlayList.push(song);


                //更新
                dispatch(changePlayListAction(newPlayList));
                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
                dispatch(changeCurrentSongAction(song));

                //请求歌词
                dispatch(getLyricAction(song.id))
            })
        }



    }
}
//添加到播放列表
export const getAddSongDetailAction = (id) => {
    return (dispatch, getState) => {
        getSongDetail(id).then((res) => { 
            const playList = getState().getIn(['player', 'playList'])
            // 先判断是已经存在播放列表,如果不存在,再进行添加
            const songIndex = playList.findIndex(song => song.id === id)
            if (songIndex !== -1) return // 找到了(后续不再执行)
            // 获取要添加播放的歌曲信息
            const willAddSong = res.songs && res.songs[0]
            // 添加到播放列表
            const newPlayList = [...playList];
            newPlayList.push(willAddSong)
            // 派发action
            dispatch(changePlayListAction(newPlayList));
        })
    }
}
//播放全部

//处理歌词
const changeGetLyricListAction = (lyricList) => ({
    type: actionTypes.CHANGE_LYRIC_LIST,
    lyricList

})
export const changeCurrentLyricIndexAction = (index) => ({
    type: actionTypes.CHNAGE_CURRENT_LYRIC_INDEX,
    index
})
export const getLyricAction = (id) => {
    return dispatch => {
        getLyric(id).then(res => {
            if (!res.lrc) return;
            // if(res.nolyric||res.uncollected) return;//判断是否有歌词
            const lyric = res.lrc.lyric
            const lyricList = parseLyric(lyric)
            dispatch(changeGetLyricListAction(lyricList))
        })
    }
}