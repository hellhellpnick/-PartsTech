import styled from 'styled-components';

const BoxCenterLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.palette.background.main};
  min-height: 100vh;
  z-index: 1000;
`;

const WrapperLoader = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: auto;
  display: inline-block;
  vertical-align: middle;
`;

const LineOuter = styled.span`
  position: absolute;
  border: 4px solid ${(props) => props.theme.palette.progress.main};
  border-left-color: transparent;
  border-bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: loader-1-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;

  @keyframes loader-1-outter {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const LineInner = styled.span`
  position: absolute;
  border: 4px solid ${(props) => props.theme.palette.progress.main};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  left: calc(50% - 20px);
  top: calc(50% - 20px);
  border-right: 0;
  border-top-color: transparent;
  animation: loader-1-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;

  @keyframes loader-1-inner {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }
`;

export { WrapperLoader, LineOuter, LineInner, BoxCenterLoader };
