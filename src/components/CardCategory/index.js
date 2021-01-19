import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { BloodIcon, DrugIcon, IvIcon } from '../../assets';
import './slide.css';

const CardCategory = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: true,
    className: 'slides',
    variableWidth: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const image = [
    BloodIcon,
    DrugIcon,
    IvIcon,
    BloodIcon,
    DrugIcon,
    BloodIcon,
    DrugIcon,
    IvIcon,
    BloodIcon,
    DrugIcon,
  ];

  const handleCategory = (idx) => {
    alert(idx);
  };

  return (
    <div className='mt-5'>
      <Slider {...settings}>
        <div style={{ width: 200 }}>
          <img src={BloodIcon} width='30%' style={{ marginTop: 20 }} />
          <p style={{ fontSize: 15, textAlign: 'center', paddingTop: 20 }}>
            Custom Orders
          </p>
        </div>
        {image.map((item, idx) => {
          return (
            <Link to='/search' key={idx}>
              <div style={{ width: 200 }}>
                <img
                  src={item}
                  width='30%'
                  alt={item}
                  style={{ marginTop: 20 }}
                />
                <p
                  style={{
                    fontSize: 15,
                    textAlign: 'center',
                    paddingTop: 20,
                    wordWrap: true,
                  }}
                >
                  Category - {idx + 1}
                </p>
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default CardCategory;
