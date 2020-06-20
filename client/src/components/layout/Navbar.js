import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const Navbar = (props) => {
  return (
    <Header>
      <Brand>🎾TENNISFANS</Brand>
      <Nav>
        <StyledLink to='/#'>Link1</StyledLink>
        <StyledLink to='/#'>Link2</StyledLink>
        <StyledLink to='/#'>Link3</StyledLink>
        <StyledLink to='/#'>Link4</StyledLink>
      </Nav>
      <Nav>
        <StyledLink to='/#'>Login</StyledLink>
        <StyledLink to='/#'>SignUp</StyledLink>
      </Nav>
    </Header>
  );
};

Navbar.propTypes = {};

export default Navbar;

const Header = styled.header`
  ${tw` mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between w-full `};
  /* background: linear-gradient(90deg, #68d391 0%, #63b3ed 100%); */
  background: linear-gradient(
        90deg,
        rgba(104, 211, 145, .9) 0%,
        rgba(99, 179, 237, .9) 100%)
`;

const Brand = styled.a`
  ${tw`flex font-medium items-center text-white text-2xl font-bold mb-4 md:mb-0 pl-8`};
`;

const Nav = styled.nav`
  ${tw`md:mx-auto flex flex-wrap items-center text-base justify-center`};
`;
const StyledLink = styled(Link)`
  ${tw`mr-5 text-white hover:text-blue-700`};
`;
