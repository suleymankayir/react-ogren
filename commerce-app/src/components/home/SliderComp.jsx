import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6 ">
          <div>
            <div className="text-7xl font-bold">
              Kaliteli ayakkabının adresine hoşgeldiniz.
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque est aperiam ipsum odio voluptatum assumenda dignissimos
              molestias laudantium cupiditate vitae!
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-black text-white">
              İncele
            </div>
          </div>
          <img
            width={400}
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3f3e7049-5c99-428c-abcd-e246b086f2ed/air-force-1-07-ayakkab%C4%B1s%C4%B1-SqKG2H.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6 ">
          <div>
            <div className="text-7xl font-bold">
              Kaliteli ayakkabının adresine hoşgeldiniz.
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque est aperiam ipsum odio voluptatum assumenda dignissimos
              molestias laudantium cupiditate vitae!
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-black text-white">
              İncele
            </div>
          </div>
          <img
            width={400}
            height={400}
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6271939c-11b9-46ec-8bcf-de723d2cccb6/air-force-1-07-ayakkab%C4%B1s%C4%B1-Mz06X7.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
