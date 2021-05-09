// import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {
    getSongDetailAction,
    getAddSongDetailAction,
} from '../pages/player/store/actionCreators'
import { getPlaySong } from '@/utils/format-utils'

export function useAddMusic() {
    const dispatch = useDispatch()
    return (item) => {
        Array.isArray(item) ? item.map(item => dispatch(getAddSongDetailAction(item.id))) : dispatch(getAddSongDetailAction(item))
    }

}

export function usePlayMusic() {
    const dispatch = useDispatch()
    return (item) => {
        dispatch(getSongDetailAction(item))
    }
}
// export function usePlayMusic_kw() {
//     const dispatch = useDispatch()
//     return (item) => {
//         dispatch(getSongDetailAction_kw(item))
//     }
// }
export function usePlayAllMusic() {
    const dispatch = useDispatch()
    return (item) => {
        dispatch(getSongDetailAction(item[0].id))
        item.map(item => dispatch(getAddSongDetailAction(item.id)))
    }
}
function down(item) {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none"; // 防止影响页面
    iframe.style.height = 0; // 防止影响页面
    const songUrl = getPlaySong(item);
    iframe.src = songUrl;
    document.body.appendChild(iframe); // 这一行必须，iframe挂在到dom树上才会发请求
}
export function useDownMusic() {
    return (item) => {
        Array.isArray(item) ? item.forEach(item => {
            const iframe = document.createElement("iframe");
            iframe.style.display = "none"; // 防止影响页面
            iframe.style.height = 0; // 防止影响页面
            const songUrl = getPlaySong(item);
            iframe.src = songUrl;
            document.body.appendChild(iframe); // 这一行必须，iframe挂在到dom树上才会发请求
        }) : down(item)

    }
}
// export function useSessionStorage(key) {
//     const [name, setName] = useState(() => {
//         const name = JSON.parse(window.sessionStorage.getItem(key))
//         return name
//     })
//     useEffect(() => {
//         window.sessionStorage.setItem(key, JSON.stringify(name))
//     }, [key, name])
//     return [name, setName]
// }

