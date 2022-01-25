import styled from 'styled-components';

interface IBoxCommentPost {
  isHeight?: number;
}

const WrapperComment = styled.div`
  position: relative;
  padding: 0 10px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 60px;
  }
`;

const NameComment = styled.p`
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.primary};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  box-orient: vertical;
  margin-bottom: 5px;
`;

const BodyComment = styled.p`
  font-size: ${(props) => props.theme.typography.textSmall.small};
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
const BoxCommentPost = styled.div<IBoxCommentPost>`
  position: relative;
  background-color: ${(props) => props.theme.palette.backgroundArticle.primary};
  padding: 10px 20px;
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

export { WrapperComment, NameComment, BodyComment, TitleComments, MessageText, BoxCommentPost };
