import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background-color: #5fa7f4;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 60px;
  width: -webkit-fill-available;
  position: fixed;
`;

const LogoWrapper = styled(NavLink)`
  color: #fff;
  font-weight: bold;
  text-decoration: none;
`;

const LogoText = styled.a`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
`;

const LinksWrapper = styled.div`
  color: #fff;
  font-weight: bold;
`;

const StyledLink = styled.a`
  color: #fff;
  text-decoration: none;


  &:hover {
    color: #e9eff6;
    transition-duration: 0.2s;
  }
`;

const StyledNavLink = styled(NavLink)`
  margin-left: 20px;
  padding-bottom: 3px;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <HeaderWrapper className="navbar navbar-expand-lg navbar-light shadow-sm">
      <LogoWrapper to={"/"}>
        <LogoText className="navbar-brand" href="#">Image Optimization Demo</LogoText>
      </LogoWrapper>
      <LinksWrapper>
        <StyledNavLink to={"/lazy-loading"}>
          <StyledLink className="nav-item active">Lazy Loading
          </StyledLink>
        </StyledNavLink>
        <StyledNavLink to={"/responsive-images"}>
          <StyledLink className="nav-item active">Responsive Images
          </StyledLink>
        </StyledNavLink>
        <StyledNavLink to={"/webp-images"}>
          <StyledLink className="nav-item active">WebP
          </StyledLink>
        </StyledNavLink>
        <StyledNavLink to={"/cdn"}>
          <StyledLink className="nav-item active">CDNs
          </StyledLink>
        </StyledNavLink>
        <StyledNavLink to={"/svg"}>
          <StyledLink className="nav-item active">SVG
          </StyledLink>
        </StyledNavLink>
      </LinksWrapper>
    </HeaderWrapper>
  );
};

export default Navbar;
