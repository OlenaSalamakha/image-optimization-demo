import React from 'react';
import styled from 'styled-components';

import SmallImage from "../../assets/resize-images/resize-300.jpg";
import MediumImage from "../../assets/resize-images/resize-600.jpg";
import LargeImage from "../../assets/resize-images/resize-1200.jpg";

const Wrapper = styled.div`
  padding: 60px 40px 0;
  background-color: #e9eff5;
`;

const ImagesContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 22px;
`;

const ImageTitle = styled.div`
  margin: 15px 0;
  font-size: 18px;
`;

const Description = styled.p`
  font-size: 16px;
  margin: 10px 0;
  color: #636774;
`;

const ResizeImagesPageContainer = styled.div`
  text-align: center;
`;

const ResponsiveImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
`;

const ResponsiveImagesPage: React.FC = () => {
  return (
    <Wrapper>
      <Title>Responsive Images</Title>
      <Description>Responsive images can automatically adjust their size and resolution based on the user’s device and screen size. This technique can help ensure that images are properly sized and scaled for all devices and screen sizes.</Description>

      <ResizeImagesPageContainer>
        <ImageTitle>Responsive Image</ImageTitle>
        <ResponsiveImage
          src={SmallImage}
          srcSet={`${SmallImage} 300w, 
                  ${MediumImage} 600w,
                  ${LargeImage} 1200w`}
          sizes="(max-width: 600px) 300px,
                (max-width: 1200px) 600px,
                1200px"
          alt="Responsive Image"
        />
      </ResizeImagesPageContainer>

      <ImagesContainer>
        <ResizeImagesPageContainer>
          <ImageTitle>Small Size Image - 300</ImageTitle>
          <ResponsiveImage
            src={SmallImage}
            alt="Small Size Image - 300"
          />
        </ResizeImagesPageContainer>

        <ResizeImagesPageContainer>
          <ImageTitle>Medium Size Image - 600</ImageTitle>
          <ResponsiveImage
            src={MediumImage}
            alt="Medium Size Image - 600"
          />
        </ResizeImagesPageContainer>


        <ResizeImagesPageContainer>
          <ImageTitle>Large Size Image - 1200</ImageTitle>
          <ResponsiveImage
            src={LargeImage}
            alt="Large Size Image - 1200"
          />
        </ResizeImagesPageContainer>
      </ImagesContainer>
    </Wrapper>
  );
};

export default ResponsiveImagesPage;
