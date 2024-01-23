import { useState } from 'react';
import LazyLoad from 'react-lazyload';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';

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
    'https://fastly.picsum.photos/id/566/2500/1000.jpg?hmac=ARUExJnSJPaCipOmWa3wCf7bB9ckub6lKZi3GmNhpVI',
    'https://fastly.picsum.photos/id/204/2500/1000.jpg?hmac=dzbpShvPNTaGU4AKcZ_359kUINci9ePdr30livEevdc',
    'https://fastly.picsum.photos/id/637/2500/1000.jpg?hmac=mqdhJTzDP5I-SZX5GvK6ULz2x_0lZ7BgIFaXx5PhnfY',
    'https://fastly.picsum.photos/id/695/2500/1000.jpg?hmac=qCZy5RubmwCxYDvOUJ5733G_DP8sLstOxmsRlVwmhBo',
    'https://fastly.picsum.photos/id/448/2500/1000.jpg?hmac=UgGW_GPEWEuql-2xcJ7lew-o42Cben_CL4K7GDGB5YA',
    'https://fastly.picsum.photos/id/445/2500/1000.jpg?hmac=CGQntMLTnFSE4qn96mdISdzqWkuxqZ5bM0_plVUfgSw',
    'https://fastly.picsum.photos/id/160/2500/1000.jpg?hmac=5PXRVpIwIcKdLna9IX8xYm_tSstJX63uZVOT0OoyEx0',
    'https://fastly.picsum.photos/id/427/2500/1000.jpg?hmac=MRxJ0Q-22eYEJEeRTurVpsbrLGy6n_k-KgCLpr4RYKw',
    'https://fastly.picsum.photos/id/305/2500/1000.jpg?hmac=48EiqFPxR55rAxS4JkGVmw4atq240ESvcoIfmYe6nZc',
    'https://fastly.picsum.photos/id/879/2500/1000.jpg?hmac=irTRc3hqKHV30QcykZoFFlow6gbv9k8rVyz6r6GV-4E',
    'https://fastly.picsum.photos/id/696/2500/1000.jpg?hmac=TqgzDaX4XJjwSOZQnOMqJZPrciOKJ1FnMVdAfucXbF0',
    'https://fastly.picsum.photos/id/655/2500/1000.jpg?hmac=noUDeh-e85FKbFgVSBFwktIWIa5bNPh6ZsmgWodkdSU',
    'https://fastly.picsum.photos/id/239/2500/1000.jpg?hmac=p4oXzMUD7VhXK7N2dz4eWnlHbCkIP8D3_enIcgDXM6Q',
    'https://fastly.picsum.photos/id/609/2500/1000.jpg?hmac=Pn1e8Y1A-sKuuh6R9jpgImpw8elk8X_SbSGJ9GN7aq4',
    'https://fastly.picsum.photos/id/316/2500/1000.jpg?hmac=ZvdaEi1_mOl-CDR1IPwZw5pX0X7chceWPaiE9MI6sDs',
    'https://fastly.picsum.photos/id/505/2500/1000.jpg?hmac=0bGpwnZGBAnZohlW4IVM6TPbnIZzllt2bTKIzjYzM3w',
    'https://fastly.picsum.photos/id/651/2500/1000.jpg?hmac=qk7eroMzl6duhF_3bP1gZIbSwjPJ6vWT2D3G0OOoqF8',
    'https://fastly.picsum.photos/id/1073/2500/1000.jpg?hmac=5fr-thTOlItulmXesT1zBoNvjmtgnr-o830Uqj63kHQ',
    'https://fastly.picsum.photos/id/126/2500/1000.jpg?hmac=owd-jaimi-nqYvxPsYxNX6NXjWrG73E5Yj8ycroI_JU',
    'https://fastly.picsum.photos/id/314/2500/1000.jpg?hmac=G8dKh4q3wBW6K2lw6A69Ky6smpQvpZdbdtYLR1cFSJQ',
    'https://fastly.picsum.photos/id/255/2500/1000.jpg?hmac=4KuOIz8-jhdokITQQq8rOeNjTXeXelidDfNlciH0-qE',
    'https://fastly.picsum.photos/id/729/2500/1000.jpg?hmac=LQL7YpnvU8SY4hQWnH6QW026c0i754QxNCKSLTN-hUQ',
  ];

  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <CollageWrapper className="collage-container">
      {imageUrls.map((url, index) => (
        <LazyLoad key={index} height={200} offset={100}>
          <Image src={url}
            onLoad={handleLoad}
            style={{ opacity: loading ? 0 : 1 }}
            alt={`Image ${index + 1}`
            } />
          {loading && <Loader>Loading...</Loader>}
        </LazyLoad>
      ))}


      {/* {imageUrls.map((url, index) => (
        <LazyLoadImage
          height={400}
          src={url}
          effect="blur"
          width={800} 
          />
      ))} */}
    </CollageWrapper>
  );
};

export default Collage;
