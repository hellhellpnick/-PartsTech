import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
interface IInputSend {
  isScroll?: number;
}

const WrapperPost = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.palette.background.primary};
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
`;

const BoxCenterPost = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  max-width: 800px;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const BoxContentPost = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  background-color: ${(props) => props.theme.palette.backgroundArticle.main};
  padding: 20px;
  width: auto;
  min-height: 400px;
  margin-bottom: 20px;
  border-radius: 8px;

  @media (min-width: 768px) {
    border-radius: 0;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 60%;
    margin-bottom: 0;
  }
`;

const PostTitle = styled.h3`
  margin-bottom: 8px;
  text-transform: capitalize;
  font-size: ${(props) => props.theme.typography.textMedium.main};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.primary};
`;

const PostText = styled.p`
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.primary};
`;
const LinkArrowBack = styled(NavLink)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  top: 20px;
  left: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.palette.background.primary};
  text-decoration: none;

  & > i {
    color: ${(props) => props.theme.palette.iconColor.main};
    font-size: 10px;
    transition: all 0.2s ease;
  }

  @media (min-width: 1024px) {
    &:hover {
      & > i {
        transform: translateX(-2px);
      }
    }
  }
`;

export { WrapperPost, BoxCenterPost, BoxContentPost, PostTitle, PostText, LinkArrowBack };
