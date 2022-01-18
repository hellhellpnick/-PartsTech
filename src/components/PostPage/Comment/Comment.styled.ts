import styled from 'styled-components';

const WrapperComment = styled.div`
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

export { WrapperComment, NameComment, BodyComment };
