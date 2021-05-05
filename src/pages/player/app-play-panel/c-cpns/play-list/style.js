import styled from 'styled-components';

export const PlayListWrapper = styled.div`
  position: relative;
  width: 553px;
  padding: 2px;
  overflow: auto;

     /* 滚动条 */
     ::-webkit-scrollbar-thumb:horizontal {
      /*水平滚动条的样式*/
      width: 4px;
      background-color: #9f9f9f;
      -webkit-border-radius: 4px;
    }
    ::-webkit-scrollbar-track-piece {
      background-color: #1a1a1a; /*滚动条的背景颜色*/
      -webkit-border-radius: 0; /*滚动条的圆角宽度*/
    }
    ::-webkit-scrollbar {
      width: 8px; /*滚动条的宽度*/
      height: 6px; /*滚动条的高度*/
    }
    ::-webkit-scrollbar-thumb:vertical {
      /*垂直滚动条的样式*/
      height: 50px;
      background-color: #9f9f9f;
      -webkit-border-radius: 4px;
      /* outline: 2px solid #000; */
      /* outline-offset: -2px; */
      border: 2px solid #9f9f9f;
    }
  .play-item {
    padding: 0 8px 0 25px;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    line-height: 28px;
    color: #ccc;
    &:hover {
    color: #fff;
      .operate {
          display: block;
      }
    }
    &.active {
      color: #fff;
      background-color: #000;
     
      ::before {
        content: "";
        position: absolute;
        left: 8px;
        width: 10px;
        height: 13px;
        background: url(${require("@/assets/img/playlist_sprite.png").default}) -182px 0;
      }
    }
    .left{
      width:250px
    }
    .right {
      display: flex;
      align-items: center;

      .singer {
        width: 80px;
      }

      .duration {
        width: 45px;
      }

      .link {
        margin-left: 20px;
        width: 14px;
        height: 16px;
        background-position: -100px 0;
      }
    }
  }
  .operate {
          display: flex;
          align-items: center;
          position:absolute;
          top: 4px;
          margin-left:250px;
          display: none;
        
          .btn {
            width: 17px;
            height: 17px;
            margin-left: 8px;
            cursor: pointer;
          }
          .favor {
            position: relative;
            top: 2px;
            background-position: -24px 0px;
            &:hover {
              background-position: -24px -20px;
            }
          }
          .share {
            position: relative;
            top: 2px;
            right:-2px;
            background-position: 0px 0px;
            &:hover {
              background-position: 0px -20px;
            }
          }

          .down {
            position: relative;
            top: 2px;
            background-position: -55px -50px;
            &:hover {
              background-position: -78px -50px;
            }
          }

          .delete {
            position: relative;
            top: 2px;
            background-position: -51px 0px;
            &:hover {
              background-position: -51px -20px;
            }
          }
   
        }
    
    
`