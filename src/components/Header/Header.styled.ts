import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  padding: 20px;
  background-color: ${(props) => props.theme.palette.background.second};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainNav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;

const MainNavItem = styled.li`
  margin-right: 10px;

  &:last-child {
    margin: 0;
  }

  & > .active {
    color: ${(props) => props.theme.palette.text.second} !important;
  }
`;

const MainNavLink = styled(NavLink)`
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.primary};
  border-bottom: 1px solid transparent;
  letter-spacing: 1.5px;
  text-decoration: none;
  padding: 10px;
  transition: all 0.2s ease;

  @media (min-width: 1024px) {
    &:hover {
      color: ${(props) => props.theme.palette.text.main};
      border-color: ${(props) => props.theme.palette.border.main};
    }
  }
`;

export { HeaderWrapper, MainNav, MainNavItem, MainNavLink };
