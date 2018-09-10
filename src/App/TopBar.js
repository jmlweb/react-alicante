import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Logo } from '../components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #232323;
  color: #fff;
  padding: ${({ theme }) => `${theme.sizes.contentPadding}`};
`;

const StyledGroup = styled.div`
  display: flex;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  font-size: 14px;
  margin-right: 15px;
  text-decoration: none;
  text-transform: uppercase;
  &:last-child {
    margin-right: 0;
  }
  &.active {
    border-bottom: 2px solid #fff;
    &:first-child {
      border-bottom: 0;
    }
  }
`;

const TopBar = () => (
  <StyledWrapper>
    <StyledGroup>
      <StyledNavLink exact to="/">
        <Logo dark height="20" />
      </StyledNavLink>
      <StyledNavLink to="/categories/desks">Desks</StyledNavLink>
      <StyledNavLink to="/categories/rooms">Rooms</StyledNavLink>
      <StyledNavLink to="/categories/offices">Offices</StyledNavLink>
    </StyledGroup>
    <StyledGroup>
      <StyledNavLink to="/login">Login</StyledNavLink>
      <StyledNavLink to="/register">Register</StyledNavLink>
    </StyledGroup>
  </StyledWrapper>
);

export default TopBar;
