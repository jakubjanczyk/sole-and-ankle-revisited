import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, MEDIA_QUERIES, WEIGHTS } from '../../constants'
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon'
import UnstyledButton from '../UnstyledButton/UnstyledButton'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>

      <MobileHeader>
        <MobileLogo>
          <Logo />
        </MobileLogo>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={1} />
        </UnstyledButton>
        <UnstyledButton>
          <Icon id="search" strokeWidth={1} />
        </UnstyledButton>
        <UnstyledButton onClick={() => setShowMobileMenu(true)}>
          <Icon id="menu" strokeWidth={1} />
        </UnstyledButton>
      </MobileHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  
  @media ${MEDIA_QUERIES.tablet} {
    display: none;
  }
`;

const MobileHeader = styled(MainHeader)`
  display: none;
  gap: 8px;
  align-items: center;
  @media ${MEDIA_QUERIES.tablet} {
    display: flex;
    position: relative;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1;
`;

const MobileLogo = styled.div`
  @media ${MEDIA_QUERIES.tablet} {
    margin-right: auto;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
