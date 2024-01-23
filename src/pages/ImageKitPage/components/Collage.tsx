import styled from 'styled-components';
import { IKImage, IKVideo, IKContext, IKUpload } from 'imagekitio-react'

const CollageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(800px, 2fr));
  gap: 16px;
  padding: 16px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;


const Collage = () => {
  const imageUrls = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg',
  ];

  return (
    <CollageWrapper className="collage-container">
      {imageUrls.map((url, index) => (
        <IKContext key={index} urlEndpoint="https://ik.imagekit.io/bw9jxiyc2">
          <IKImage path={url} transformation={[{
            "height": "800",
            "width": "800"
          }]} 
          loading="lazy" 
          lqip={{ active: true, quality: 20, blur: 10 }} />
        </IKContext>
      ))}
    </CollageWrapper>
  );
};

export default Collage;
