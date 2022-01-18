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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  padding: 20px;
  width: auto;
  height: auto;
  overflow-y: scroll;
  border-radius: 8px;
  transition: all 0.2s ease;

  @media (min-width: 768px) {
    border-radius: 0;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 40%;
    height: ${(props) => props.isHeight && props.isHeight}px;
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

export {
  WrapperPost,
  BoxCenterPost,
  BoxContentPost,
  BoxCommentPost,
  PostTitle,
  PostText,
  TitleComments,
  WrapperInputSend,
};
