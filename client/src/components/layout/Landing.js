import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const Landing = (props) => {
  return (
    <section className='text-gray-700 body-font'>
      <Title>Styled component</Title>
      <Testing>Twailwind</Testing>
    </section>
  );
};

Landing.propTypes = {};

export default Landing;

const Title = styled.h1`
  font-size: 2rem;
  color: blue;
`;

const Testing = styled.h1`
  ${tw`text-6xl text-orange-500`};
`;
