import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface IBoxCommentPost {
  isHeight?: number;
}

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

const BoxCommentPost = styled.div<IBoxCommentPost>`
  position: relative;
  background-color: ${(props) => props.theme.palette.backgroundArticle.primary};
  padding: 20px 20px 120px;
  min-width: 200px;
  width: auto;
  height: auto;
  overflow-y: scroll;
  border-radius: 8px;
  height: ${(props) => props.isHeight && props.isHeight}px;
  transition: all 0.2s ease;

  @media (min-width: 768px) {
    border-radius: 0;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 40%;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.palette.iconColor.primary};
    border-radius: 8px;
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

const TitleComments = styled.h3`
  font-size: ${(props) => props.theme.typography.textMedium.small};
  font-weight: ${(props) => props.theme.typography.textWeight.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.primary};
  font-style: italic;
  text-align: center;
  margin-bottom: 20px;
`;

const WrapperInputSend = styled.div<IInputSend>`
  position: absolute;
  bottom: -${(props) => props.isScroll}px;
  left: 0;
  width: 100%;
  min-height: 60px;
  padding: 10px;
  background-color: ${(props) => props.theme.palette.backgroundArticle.primary};
  border: 1px solid ${(props) => props.theme.palette.border.main};
  z-index: 10;
`;

const MessageText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.typography.textMedium.small};
  font-weight: ${(props) => props.theme.typography.textWeight.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.primary};
  height: 70%;
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

const BtnSendComment = styled.button`
  cursor: pointer;
  outline: none;
  border: 1px solid ${(props) => props.theme.palette.text.second};
  width: 100%;
  transition: 0.4s;
  border-radius: 5px;
  padding: 10px;
  background-color: transparent;
  box-shadow: inset 0px 0px 15px 0px rgba(28, 146, 202, 0.5);
  color: ${(props) => props.theme.palette.text.second};

  @media (min-width: 1024px) {
    &:hover {
      border: 1px solid #eee;
      color: #eee;

      box-shadow: inset 0px 0px 15px 0px rgba(28, 146, 202, 1),
        0px 0px 20px 6px rgba(28, 146, 202, 1);
    }
  }
`;

export {
  WrapperPost,
  BoxCenterPost,
  BoxContentPost,
  BoxCommentPost,
  PostTitle,
  PostText,
  TitleComments,
  WrapperInputSend,
  MessageText,
  LinkArrowBack,
  BtnSendComment,
};
