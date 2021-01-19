import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
} from 'swiper';
import { Banner1, Banner2, Banner3 } from '../../assets';
import './banner.css';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);

const Banner = () => {
  const banner = [
    { name: 'banner-1', image: Banner1 },
    { name: 'banner-2', image: Banner2 },
    { name: 'banner-3', image: Banner3 },
  ];
  return (
    <div className='mt-5'>
      <Swiper
        id='main'
        tag='section'
        wrapperTag='ul'
        pagination={{ clickable: true }}
        effect='fade'
        autoplay={{ delay: 2000 }}
      >
        {banner.map((item, idx) => (
          <SwiperSlide tag='li' key={idx}>
            <img
              src={item.image}
              width='100%'
              style={{ listStyle: 'none', borderRadius: '20px' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
