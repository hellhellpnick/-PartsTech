import styled from 'styled-components';

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

const BtnDeleteComment = styled.button`
  position: absolute;
  top: 3px;
  right: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;

  & > i {
    color: ${(props) => props.theme.palette.iconColor.main};
  }
`;

export { WrapperComment, NameComment, BodyComment, BtnDeleteComment };
