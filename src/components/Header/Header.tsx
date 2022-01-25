import { Outlet } from 'react-router-dom';
import { HeaderWrapper, MainNav, MainNavItem, MainNavLink } from './Header.styled';
import { routes } from '../../Router';

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <MainNav>
          <MainNavItem>
            <MainNavLink to={routes.main}>Home</MainNavLink>
          </MainNavItem>
          <MainNavItem>
            <MainNavLink to={routes.posts.main}>Posts</MainNavLink>
          </MainNavItem>
          <MainNavItem>
            <MainNavLink to={routes.albums.main}>Albums</MainNavLink>
          </MainNavItem>
          <MainNavItem>
            <MainNavLink to={routes.users.main}>Users</MainNavLink>
          </MainNavItem>
        </MainNav>
      </HeaderWrapper>
      <Outlet />
    </>
  );
};

export default Header;
