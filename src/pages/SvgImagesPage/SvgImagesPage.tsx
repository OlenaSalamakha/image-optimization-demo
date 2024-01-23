import React from 'react';
import styled from 'styled-components';
import SvgImage from './components/SvgImage';

const Wrapper = styled.div`
  padding: 60px 40px 0;
  overflow-y: hidden;
  background-color: #e9eff5;
  height: calc( 100vh - 60px );
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 22px;
`;


const SvgImagesPage: React.FC = () => {
  
  return (
    <Wrapper>
      <Title>SVG as a React Component</Title>
      <SvgImage fill={'pink'} />
    </Wrapper>
   
  );
};

export default SvgImagesPage;
