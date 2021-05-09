import styled from "styled-components";

export const SerachWrapper = styled.div`
  position: absolute;
  z-index: 99;
  top: 59px;
  width: 240px;
  border: 1px solid #ccc;
  background-color: #fefefe;
  box-shadow: 0 0 1.5px 1px #d3d3d3;
  border-radius: 5px;
  padding-top: 10px;
  color:#333;
  .aaa{
    color:red
  }
  .arrow {
    position: absolute;
    top: -11px;
    left: 110px;
    width: 24px;
    height: 11px;
    background-position: -48px 0;
  }

  .all {
    padding: 2px 0px 10px 8px;
    border-bottom: 1px solid #e2e2e2;
    .searchSong{
      cursor: pointer;
      :hover{
            text-decoration:none;
            background-color: rgb(190, 190, 190)
          }
    }
    span {
      display: inline-block;
      text-align: center;
      width: 75px;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d3d3d3;
      border-radius: 3px;
      background-color: #fafafa;
    }
  }

  .category {
    padding-left: 8px;
    /* position: relative; */
    dl {
      display: flex;
      align-items: flex-start;
      background-color:#ffffff;

    }

    dt {
      display: inline-block; 
      align-items: center; 
      /* position: absolute; */
      padding: 10px 0px 5px 0px;
      width: 62px;
      text-align: center;
     
      i {
        display: inline-block;
        width: 18px;
        height: 18px;
        margin-right: 2px;
        margin-bottom:-10px;
        
      }
      
      .songs-icon{
          background-position: -32px -300px;
        }
      .artists-icon{
          background-position: -48px -300px;
        }
      .albums-icon{
          background-position: -32px -320px;
      }
      .plays-icon{
          background-position: -48px -320px;
        }
    }

    
    dd {
      flex: 1;
      /* display: flex; */
      flex-wrap: wrap;
      /* border-left: 1px solid #e2e2e2; */
      line-height:28px;
      .item {
        padding-left:8px;
        padding-top:2px;
         border-left: 1px solid #e2e2e2;
         cursor: pointer;
          width: 175px;
            overflow: hidden;/*超出部分隐藏*/
            white-space: nowrap;/*不换行*/
            text-overflow:ellipsis;/*超出部分文字以...显示*/
        .link{
        } 
        :hover{
            text-decoration:none;
            background-color: rgb(190, 190, 190)
          }
     
      }
      nav{
        position: absolute;
        left:0px;
        margin-top:-8px;

     }
    }
    dd:nth-child(2n) {
            background-color: #f7f7f7;
        }

        dd:nth-child(2n+1) {
          background-color: #fff;
          border-bottom: 1px solid #e2e2e2;
          border-top: 1px solid #e2e2e2;
        }
  }
`