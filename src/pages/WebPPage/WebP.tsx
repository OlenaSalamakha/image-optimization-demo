import React from 'react';
import styled from 'styled-components';

import Image_1_jpeg from "../../assets/webp/image_1.jpeg";
import Image_1_webp from "../../assets/webp/image_1.webp";

import Image_2_jpeg from "../../assets/webp/image_2.jpeg";
import Image_2_webp from "../../assets/webp/image_2.webp";

import Image_6_png from "../../assets/webp/image_6.png";
import Image_6_webp from "../../assets/webp/image_6.webp"

import Image_7_png from "../../assets/webp/image_7.png";
import Image_7_webp from "../../assets/webp/image_7.webp";

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

const Image = styled.img`
  width: 100%;
`;

const ImageWrapper = styled.div`
  text-align: center;
`;

const ImageTitle = styled.div`
  margin: 15px 0;
  font-size: 18px;
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 100px;
`;


const WebP: React.FC = () => {
  return (
    <Wrapper>
      <Title>WebP Images</Title>
      <Description>WebP is an image format that provides superior image compression and can reduce image file sizes by up to 34% compared to other formats like JPEG and PNG. This format is supported by most modern browsers, and using it can significantly improve website speed.
      </Description>

      <ImagesContainer>
        <ImageWrapper>
          <ImageTitle>Image 1 - .jpeg</ImageTitle>
          <Image src={Image_1_jpeg}
            alt="Image 1 - .jpeg" />
        </ImageWrapper>

        <ImageWrapper>
          <ImageTitle>Image 1 - .webp</ImageTitle>
          <Image src={Image_1_webp}
            alt="Image 1 - .webp" />
        </ImageWrapper>
      </ImagesContainer>

      <ImagesContainer>
        <ImageWrapper>
          <ImageTitle>Image 2 - .jpeg</ImageTitle>
          <Image src={Image_2_jpeg}
            alt="Image 2 - .jpeg" />
        </ImageWrapper>

        <ImageWrapper>
          <ImageTitle>Image 2 - .webp</ImageTitle>
          <Image src={Image_2_webp}
            alt="Image 2 - .webp" />
        </ImageWrapper>
      </ImagesContainer>

      <ImagesContainer>
        <ImageWrapper>
          <ImageTitle>Image 3 - .png</ImageTitle>
          <Image src={Image_6_png}
            alt="Image 3 - .png" />
        </ImageWrapper>

        <ImageWrapper>
          <ImageTitle>Image 3 - .webp</ImageTitle>
          <Image src={Image_6_webp}
            alt="Image 3 - .webp" />
        </ImageWrapper>
      </ImagesContainer>

      <ImagesContainer>
        <ImageWrapper>
          <ImageTitle>Image 4 - .png</ImageTitle>
          <Image src={Image_7_png}
            alt="Image 4 - .png" />
        </ImageWrapper>

        <ImageWrapper>
          <ImageTitle>Image 4 - .webp</ImageTitle>
          <Image src={Image_7_webp}
            alt="Image 4 - .webp" />
        </ImageWrapper>
      </ImagesContainer>

    </Wrapper>
  );
};

export default WebP;
