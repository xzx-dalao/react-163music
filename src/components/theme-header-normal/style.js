import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  padding-bottom: 5px;
  border-bottom: 2px solid #c20c0c;
 
  .left {
    display: flex;
    align-items: center;

    .title {
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  font-size: 24px;
      margin-right: 20px;
    }

    .keyword {
      display: flex;
      margin-top:10px;
      .item {
        .link{
          cursor: pointer;
          :hover{
            text-decoration:underline
          }
        }
        .divider {
          margin: 0 15px;
          color: #ccc;
        }
      }
    }
  }

  
`