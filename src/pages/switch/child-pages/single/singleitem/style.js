import styled from 'styled-components'

export const SingleSongItemWrapper = styled.div`
  display: flex;
  padding: 10px 10px 8px 18px;
  border: 1px solid #fff;
  &:hover {
    border: 1px solid #e1e1e1;
    background: #f2f2f2;
    .operate {
          display: block;
    }
  }

  .song-name {
    position:relative;
    width: 370px;
    height: 17px;
    display: flex;
    justify-items: center;
    .anticon-play-circle {
      color: #b2b2b2;
      font-size: 18px;
      &:hover {
        color: #666666;
      }
    }
    & > em {
      margin-left: 5px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .name {
      margin-left: 5px;
      display:flex;
      
          }
    .alia{
      /* position:relative;*/
      max-width: 100%; 
      color:#aeaeae;
      text-decoration:none
    }
    .alia:hover{
      text-decoration:none
    }
    
  }


  .singer {
    width: 144px;
    margin-left: 125px;
  }

  .album {
    width: 156px;
    margin-right: 12px;
  } 
  
  &:nth-child(even) {
    background: #f7f7f7;
    border-color: #f7f7f7;
    &:hover {
      border: 1px solid #e1e1e1;
      background: #f2f2f2;
    }
  }

        .operate {
          display: flex;
          align-items: center;
          position:absolute;
          margin-left:380px;
          display: none;
        
          .btn {
            width: 17px;
            height: 17px;
            margin-left: 8px;
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
            background-position: -297px -268px;
          }
   
        }
    
    
    
  
`
