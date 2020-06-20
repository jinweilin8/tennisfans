import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const Landing = (props) => {
  return <LandingWrapper></LandingWrapper>;
};

Landing.propTypes = {};

export default Landing;

const LandingWrapper = styled.section`
  ${tw`pt-24`};
  position: relative;
  /* background: linear-gradient(90deg, #68d391 0%, #63b3ed 100%),
    url(${require('../../assets/img/hero.jpg')}); */
  background: linear-gradient(
        90deg,
        rgba(104, 211, 145, .9) 0%,
        rgba(99, 179, 237, .9) 100%), url(${require('../../assets/img/hero.jpg')});
  height: 100vh;
`;
