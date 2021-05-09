import React, { memo } from 'react'
import { GithubOutlined  } from '@ant-design/icons'
import { UserWrapper } from './style'
export default memo(function XZXUserLogin() {

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
        </UserWrapper>
    )
})
