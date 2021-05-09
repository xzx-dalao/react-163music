import styled from 'styled-components'

export const SearchWrapper = styled.div`
  .content {
    padding: 40px;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    margin: 0 auto;
    
    .search-bar{
      display: flex;
      justify-content: center;
      width:420px;
      height: 40px;
      margin: 0 auto;
      background-position: 0px 0px;
   
    }
    .switch{
      position: absolute;
    left: 47%;
    display: block;
    background-color: rgb(73, 177, 245);
    line-height: 2.4;
    padding-left:15px;
    padding-right:15px;
    font-size:15px;
    color:rgb(255, 255, 255);
    text-decoration:none;
    .giticon{
        margin-right:8px
      }
    }

    .search-warper{
        &:hover{
        .search-icon{
          display:inline-flex;
        }
        cursor: pointer;
      } .search-icon{
      display: flex;
      justify-content: center;

      display:none;
      width: 70px;
      height: 40px;
      margin-right:-18px;
      background-position: -428px 0px;
    }
    }
   
    .search-content {

      .search-info {
        margin: 28px 0 17px;
        color: #999;

        .music-amount {
          color: #c20c0c;
        }
      }

      .search-category {
        display: flex;
        height: 37px;
        border: 1px solid #ccc;
        border-width: 0 1px;
        background-position: 0 0;
        background-repeat: repeat-x;

        .route-item {
          width: 112px;
          height: 37px;
          text-align: center;
          font-size: 14px;

          &.active {
            background-position: left -90px;
            border-right: solid 1px #ccc;
          }

          &:hover {
            background-position: left -90px;
            border-right: solid 1px #ccc;
            text-decoration: none;
          }

          em {
            display: block;
            width: 108px;
            padding: 2px 2px 0 0;
            line-height: 37px;
            cursor: pointer;
            text-align: center;
          }
        }
      }
    }
  }
`
