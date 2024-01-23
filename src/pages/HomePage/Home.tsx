import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 60px 40px 40px;
  //overflow-y: hidden;
  background-color: #e9eff5;
  //height: calc( 100vh - 60px );
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 22px;
`;

const StyledListContainer = styled.ul`
  list-style-type: circle;
  padding: 0;
`;

const StyledListItem = styled.li`
  margin: 8px 0;
  padding: 8px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  border-radius: 4px;
`;

const StyledLink = styled.a`
  color: blue;
  text-decoration: none;


  &:hover {
    text-decoration: underline;
    transition-duration: 0.2s;
  }
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
  color: #636774;
  margin-top: 80px;
`;


const LazyLoadingPage: React.FC = () => {

  const resources = [
    {
      name: 'Image Generator',
      url: 'https://picsum.photos'
    },
    {
      name: 'ImageKit (CDN)',
      url: 'https://imagekit.io'
    },
    {
      name: 'Adobe (Resize images)',
      url: 'https://new.express.adobe.com/tools/resize-image'
    },
  ];

  const tips = [
    {
      name: 'Optimize Delivery with a Content Delivery Network (CDN)',
    },
    {
      name: 'Resize Images: Use images with dimensions that match the required display size. Avoid using larger images and relying on CSS to resize them.'
    },
    {
      name: 'Image Optimization Tools: Utilize tools like ImageMagick, OptiPNG, or online services like Kraken.io or Cloudinary to automate and enhance image optimization.'
    },
    {
      name: 'Lazy Loading: Implement lazy loading to load images only when they are about to enter the users viewport. This can significantly improve initial page load times.',
    },
    {
      name: 'Use WebP ito serve up in smaller images',
    },
    {
      name: 'Minimize the number of image requests by using CSS sprites',
    },
    {
      name: 'Use lossy compression where possible',
    },
    {
      name: 'Specify Image Dimensions where possible',
    },
    {
      name: 'Choose the Right Image Format: Use appropriate image formats based on the content of the image'
    },
  ];

  const imgFormats = [
    {
      name: 'SVG is ideal for vector graphics and logos',
    },
    {
      name: 'WebP is a modern format that provides good compression and quality.',
    },
    {
      name: 'Use GIF if you need animation',
    },
    {
      name: 'Use PNG if you need high detail and high resolutions',
    },
    {
      name: 'Use JPG for general photos and screenshots',
    },
  ];
  
  
  return (
    <Wrapper>
      <Description>General recommendation:</Description>
      <StyledListContainer>
        {tips.map((item, index) => (
          <>
            <StyledListItem key={index}>{item.name}</StyledListItem>
          </>
        ))}
      </StyledListContainer>

      <Description>Image Formats:</Description>
      <StyledListContainer>
        {imgFormats.map((item, index) => (
          <>
            <StyledListItem key={index}>{item.name}</StyledListItem>
          </>
        ))}
      </StyledListContainer>

      <Description>Resources:</Description>
      <StyledListContainer>
        {resources.map((item, index) => (
          <>
            <StyledLink href={item.url} target='_blank'>
              <StyledListItem key={index}>{item.name}</StyledListItem>
            </StyledLink>
          </>
        ))}
      </StyledListContainer>
    </Wrapper>
  );
};

export default LazyLoadingPage;
