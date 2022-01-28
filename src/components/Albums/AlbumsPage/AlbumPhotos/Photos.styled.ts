import styled from 'styled-components';

const WrapperImg = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  min-height: 100px;
  margin-bottom: 5px;
`;

const ImgBasic = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImgMini = styled.img`
  cursor: pointer;
  position: absolute;
  top: 1px;
  right: 1px;
  width: 50px;
  height: 50px;
  object-fit: cover;
  border: 1px solid #000;
`;

export { WrapperImg, ImgBasic, ImgMini };
