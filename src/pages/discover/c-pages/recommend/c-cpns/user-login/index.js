import React, { memo } from 'react'
import { GithubOutlined  } from '@ant-design/icons'
import { UserWrapper } from './style'
// import { useHistory } from 'react-router-dom';
// import {useDispatch} from 'react-redux'
// import {changePlayModeAction} from "@/pages/player/store/actionCreators"
export default memo(function XZXUserLogin() {
    // const history = useHistory();
    // const dispatch = useDispatch()
    // const goto = () => {
    //     history.push({ pathname: `/switch`})
    //     dispatch(changePlayModeAction('kw'))
    //   }
    return (
        <UserWrapper>
            <div>   
                <a target="_blank" rel="noreferrer" href="https://github.com/xzx-dalao">
                <div className="name">
                    <span className="giticon"><GithubOutlined /></span>
                     Follow Me
                </div>
                </a>
            </div>
            
            {/* <div onClick={goto}>
                <div className="name">
                    <span className="giticon"><ManOutlined /></span>
                     Switch
                </div>
            </div> */}
      
          
        </UserWrapper>
    )
})
