import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const WrapperPost = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 370px;
  background-color: ${(props) => props.theme.palette.background.main};
  border-radius: 10px;
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    max-width: 280px;

    &:nth-child(2n + 1) {
      margin-right: 20px;
    }
  }
`;

const SvgPost = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
`;

const TitlePost = styled.h3`
  font-size: ${(props) => props.theme.typography.textMedium.main};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.main};
  margin-bottom: 5px;
`;

const TextPost = styled.p`
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.primary};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  box-orient: vertical;
`;

const LinkToPost = styled(NavLink)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  bottom: 20px;
  right: 20px;
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
        transform: translateX(2px);
      }
    }
  }
`;

export { SvgPost, WrapperPost, TitlePost, TextPost, LinkToPost };
