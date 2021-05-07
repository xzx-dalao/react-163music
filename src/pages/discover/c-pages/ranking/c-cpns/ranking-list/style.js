import styled from 'styled-components';

export const RankingListWrapper = styled.div`
  padding: 0 30px 40px 40px;

  .play-list {
    table {
      width: 100%;
      border: 1px solid #d9d9d9;

      thead {
        th {
          height: 34px;
          line-height: 34px;
          background-image: url(${require("@/assets/img/sprite_table.png").default});
          color: #666;
          border: 1px solid #ddd;
          border-width: 0 0 1px 1px;
          padding-left: 10px;
        }
        .title{
        }
        .ranking {
          width: 78px;
          border-left: none;
        }

        .duration {
          width: 91px;
        }

        .singer {
          width: 173px;
        }
      }

      tbody {
        display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
        tr{
      
          display: table-row;
    vertical-align: inherit;
    border-color: inherit;
    &:hover{
            .operate{
              display:inline-flex;
        
          }
        }
        }
        td {
          padding: 6px 10px;
          line-height: 18px;
          text-align: left;
          display: table-cell;
          vertical-align: inherit;
        }

        tr:nth-child(2n) {
          background-color: #fff;
          .operate{
            background-color: #fff;
          }
        }

        tr:nth-child(2n+1) {
          .operate{
            background-color: #f7f7f7;
          }
          background-color: #f7f7f7;
        }

        .rank-num {
          display: flex;

          .num {
            width: 25px;
            height: 18px;
            text-align: center;
            color: #999;
          }

          .new {
            width: 16px;
            height: 17px;
            margin-left: 12px;
            background-position: -67px -283px;
          }
        }

        .song-name {
          display: flex;
          align-items: center;
          position:relative;
          justify-items: center;
          width: 300px;
     
        
          img {
            width: 50px;
            height: 50px;
            margin-right: 5px;
          }

          .play {
            width: 17px;
            height: 17px;
            background-position: 0 -103px;
            margin-right: 15px;
            cursor: pointer;
          }

          .name {
            max-width: 60%;
          }
          .text{
        color:#aeaeae
          }
        }
        .time{
          position: relative;
          .operate {
          position: absolute;
          display: flex; 
          left:-5px;
          align-items: center;  
          display: none;
         
          .btn {
            width: 17px;
            height: 17px;
            /* margin-left: 8px; */
            cursor: pointer;
          }
          .addto {
            position: relative;
              top: 2px;
              background-position: 1px -700px;
          }
          .down {
            position: relative;
            top: 2px;
            background-position: -83px -174px;
          }

          .share {
            position: relative;
            top: 2px;
            background-position: -46px -137px;
          }

          .favor {
            position: relative;
            top: -1px;
            left:-1px;
            background-position: -297px -268px;
          }
         
        }
        .opt{
            float:left;
          }
        
        }
        
        .singer{
          position:relative;
          padding-right:0px;
        }
      }
    }
    
  }
`