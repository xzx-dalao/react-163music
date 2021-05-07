import styled from 'styled-components';

export const AlbumWrapper = styled.div`
  .album-image {
    position: relative;
    width: ${props => props.width};
    height: ${props => props.size};
    overflow: hidden;
    margin-top: 15px;
    :hover{
      .play {display:block}
    }
    img {
      width: ${props => props.size};
      height: ${props => props.size};
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${props => props.bgp};
      text-indent: -9999px;
    }
    .play {
        display:none;
        position: absolute;
        left: 60%;
        bottom:5%;
        width: ${props => props.imgwh};
        height: ${props => props.imgwh};
        background-position: 0 ${props => props.icon};
        &:hover {
          cursor: pointer;
          background-position: 0 ${props => props.iconactive};
        }}
  }

  .album-info {
    font-size: 12px;
    width: ${props => props.size};
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      color: #666;
    }
  }
`