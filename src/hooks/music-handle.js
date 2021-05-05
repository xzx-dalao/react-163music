import { useDispatch } from 'react-redux'
import {
    getSongDetailAction,
    getAddSongDetailAction
} from '../pages/player/store/actionCreators'
import { getPlaySong } from '@/utils/format-utils'

export function useAddMusic() {
    const dispatch = useDispatch()
    return (item) => {
        dispatch(getAddSongDetailAction(item))
    }
}
export function usePlayMusic() {
    const dispatch = useDispatch()
    return (item) => {
        dispatch(getSongDetailAction(item))
    }
}
export function usePlayAllMusic() {
    const dispatch = useDispatch()
    return (item) => {
        item.map(item => dispatch(getAddSongDetailAction(item.id)))
    }
}
export function useDownMusic() {
    return (id) => {
        const songUrl = getPlaySong(id);
        const iframe = document.createElement("iframe");
        iframe.style.display = "none"; // 防止影响页面
        iframe.style.height = 0; // 防止影响页面
        iframe.src = songUrl;
        document.body.appendChild(iframe); // 这一行必须，iframe挂在到dom树上才会发请求
    }
}