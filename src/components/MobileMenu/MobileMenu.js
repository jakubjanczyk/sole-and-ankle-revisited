/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components/macro'
import { DialogContent, DialogOverlay } from '@reach/dialog'

import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'
import { COLORS, WEIGHTS } from '../../constants'

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null
  }

  return (
    <Overlay>
      <Content>
        <CloseButton onClick={onDismiss}><Icon id="close" size={16} strokeWidth={3} /><VisuallyHidden>Dismiss menu</VisuallyHidden></CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <NavLink href="/terms">Terms and Conditions</NavLink>
          <NavLink href="/privacy">Privacy Policy</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </Footer>
      </Content>
    </Overlay>
  )
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
`

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
`

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`

const Filler = styled.div`
  flex: 1;
`

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export default MobileMenu
