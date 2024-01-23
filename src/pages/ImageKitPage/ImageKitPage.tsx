import React from 'react';
import styled from 'styled-components';

import Collage from './components/Collage';

const Wrapper = styled.div`
  padding: 60px 40px 0;
  background-color: #e9eff5;
  min-height: 100vh;
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

const StyledLink = styled.a`
  color: blue;
  text-decoration: none;


  &:hover {
    text-decoration: underline;
    transition-duration: 0.2s;
  }
`;

const ImageKitPage: React.FC = () => {
  return (
    <Wrapper>
      <Title>Content Delivery Networks (CDNs)</Title>
      <Description>CDNs are networks of servers that are distributed around the world and can be used to store and serve website content, including images. By using a CDN, businesses and organizations can improve website speed by reducing the distance that content needs to travel to reach the user.
      </Description>
      <Description>
        <StyledLink href="https://imagekit.io">
          {'ImageKit '}
        </StyledLink>is used in example below.</Description>
      <Collage />
    </Wrapper>
  );
};

export default ImageKitPage;
