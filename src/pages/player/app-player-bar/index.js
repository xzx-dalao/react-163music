import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils'
import {
    getSongDetailAction,
    changeSequenceAction,
    changeCurrentIndexAndSongAction,
    changeCurrentLyricIndexAction,
    changeStopAction
} from '../store/actionCreators';

import { message } from 'antd'
import { Slider } from 'antd';
import { NavLink } from 'react-router-dom';
import {
    PlaybarWrapper,
    Control,
    PlayInfo,
    Operator
} from './style'
import HYAppPlayPanel from '../app-play-panel'

export default memo(function XZXAppPlayerBar() {
    //state
    const [currentTime, setCurrentTime] = useState(0)
    const [progress, setProgress] = useState(0)
    const [isChanging, setIsChanging] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [showPanel, setShowPanel] = useState(false);
    //redux hook
    const {
        currentSong,
        sequence,
        lyricList,
        currentLyricIndex,
        playList,
        stop
    } = useSelector(state => ({
        playList: state.getIn(["player", "playList"]),
        currentSong: state.getIn(["player", "currentSong"]),
        sequence: state.getIn(["player", "sequence"]),
        lyricList: state.getIn(["player", "lyricList"]),
        currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
        stop: state.getIn(["player", "stop"]),
    }), shallowEqual)
    const dispatch = useDispatch();

    //其他hook
    const audioRef = useRef()
    useEffect(() => {
        dispatch(getSongDetailAction(185697))
    }, [dispatch])
    useEffect(() => {
        audioRef.current.src = getPlaySong(currentSong.id)
        audioRef.current.play().then(res => {
            setIsPlaying(true)
        }).catch(err => {
            setIsPlaying(false)
        })
        if(stop===true){
            audioRef.current.pause()
            // console.log('整体橱柜')
        }
    }, [currentSong,stop])
    //其他操作
    const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
    const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
    const duration = currentSong.dt || 0;//时长
    const showDuration = formatDate(duration, "mm:ss")//时长转换
    const showCurrentTime = formatDate(currentTime, "mm:ss")//当前时间转换
    // const progress=currentTime/duration*100;//进度条
    //其他方法
    const playMusic = useCallback(() => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play()
        setIsPlaying(!isPlaying)
        
    }, [isPlaying])
    const timeUpdate = (e) => {
        // console.log(e.target.currentTime)
        const currentTime = e.target.currentTime
        if (!isChanging) {
            setCurrentTime(currentTime * 1000)
            setProgress(currentTime * 1000 / duration * 100)
        }

        //获取当前歌词
        // let currentLyricIndex=0;
        // for(let i=0;i<lyricList.length;i++){
        //     let lyricItem=lyricList[i];
        //     if(currentTime*1000<lyricItem.time){
        //         currentLyricIndex=i
        //         break;
        //     }
        // }
        let i = 0;
        for (; i < lyricList.length; i++) {
            let lyricItem = lyricList[i];
            if (currentTime * 1000 < lyricItem.time) {
                break;
            }
        }
        // console.log(lyricList[currentLyricIndex-1])
        // console.log(i-1)  

        //展示歌词   
        if (currentLyricIndex !== i - 1) {
            dispatch(changeCurrentLyricIndexAction(i - 1));
            // console.log(lyricList[i-1])

            const content = lyricList[i - 1] && lyricList[i - 1].content
            if (content) {
                message.open({
                    key: "lyric",
                    content: content,
                    duration: 0,
                    className: "lyric-class"
                })

            } else {
                message.destroy()
            }

        }

    }
    const changeSequence = () => {
        let currentSequence = sequence + 1;
        if (currentSequence > 2) {
            currentSequence = 0
        }
        dispatch(changeSequenceAction(currentSequence))
    }
    const changeMusic = (tag) => {
        if(!playList.length) {
            return;
        };
        dispatch(changeCurrentIndexAndSongAction(tag))
    }
    const handleMusicEnded = () => {
        if (sequence === 0) {// 顺序播放
            audioRef.current.pause()
            dispatch(changeStopAction(true))
        }
        else if (sequence === 2) { // 单曲循环
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        } 
        else {//随机播放
            dispatch(changeCurrentIndexAndSongAction(1));
        }
    }

    const sliderChange = useCallback((value) => {
        setIsChanging(true)
        const currentTime = value / 100 * duration
        setCurrentTime(currentTime)
        setProgress(value)
        dispatch(changeStopAction(false))
    }, [duration,dispatch])
    const sliderAfterChange = useCallback((value) => {
        const currentTime = value / 100 * duration / 1000
        audioRef.current.currentTime = currentTime
        setCurrentTime(currentTime * 1000)
        setIsChanging(false)
        if (!isPlaying) {
            playMusic()
        }
    }, [duration, isPlaying, playMusic])
    return (
        <PlaybarWrapper className="sprite_player">
            <div className="content wrap-v2">
                {/* 控制按钮 */}
                <Control isPlaying={isPlaying}>
                    <button className="sprite_player prev"
                        onClick={e => changeMusic(-1)}></button>
                    <button className="sprite_player play"
                        onClick={e => playMusic()}></button>
                    <button className="sprite_player next"
                        onClick={e => changeMusic(1)}></button>
                </Control>
                    {/* 跳转到歌曲详情 */}
                <PlayInfo>
                    <div className="image">
                        <NavLink to="/discover/player">
                            <img src={getSizeImage(picUrl, 35)} alt="" />
                        </NavLink>
                    </div>
                    <div className="info">
                        <div className="song">
                            <span className="song-name">{currentSong.name}</span>
                            <a href="/#" className="singer-name">{singerName}</a>
                        </div>
                        <div className="progress">
                            {/* 进度条 */}
                            <Slider defaultValue={30}
                                value={progress}
                                onChange={sliderChange}
                                onAfterChange={sliderAfterChange}
                            />
                            <div className="time">
                                <span className="now-time">{showCurrentTime}</span>
                                <span className="divider">/</span>
                                <span className="duration">{showDuration}</span>

                            </div>
                        </div>
                    </div>
                </PlayInfo>
                {/* 各种按钮 */}
                <Operator sequence={sequence}>
                    <div className="left">
                        <button className="sprite_player btn favor"></button>
                        <button className="sprite_player btn share"></button>
                    </div>
                    <div className="right sprite_player">
                        <button className="sprite_player btn volume"></button>
                        <button className="sprite_player btn loop"
                            onClick={e => changeSequence()}
                        ></button>
                        <button className="sprite_player btn playlist"
                            onClick={e => setShowPanel(!showPanel)}>
                                <span className="showlength">{playList.length}</span>
                        </button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef}
                onTimeUpdate={e => timeUpdate(e)}
                onEnded={e => handleMusicEnded()} />
            {showPanel && <HYAppPlayPanel />}
        </PlaybarWrapper>
    )
})


