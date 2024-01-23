import React from 'react';
import styled from 'styled-components';
import Collage from './components/Collage';

const Wrapper = styled.div`
  padding: 60px 40px 0;
  background-color: #e9eff5;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 22px;
`;

const Description = styled.p`
  font-size: 16px;
  margin: 10px 0;
  color: #636774;
`;

const LazyLoadingPage: React.FC = () => {
  return (
    <Wrapper>
      <Title>Lazy Loading</Title>
      <Description>Lazy loading is a technique that loads images only when they are needed. This technique can help improve website speed by reducing the number of images that need to be loaded when a user first visits the website.
      </Description>
      <Collage />
    </Wrapper>
  );
};

export default LazyLoadingPage;
