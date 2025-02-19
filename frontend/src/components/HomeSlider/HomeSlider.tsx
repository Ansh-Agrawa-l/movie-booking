import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';

const HomeSlider = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }, []);

    const banners = [
        {
            imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1739960798223_sonicthehedgehog3web.jpg'
        },
        {
            imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1726038890736_playcardnewweb.jpg'
        }
    ];

    return (
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
        >
            {banners.map((banner, index) => (
                <SwiperSlide key={index}>
                    {width > 0 && ( 
                        <Image
                            src={banner.imgUrl}
                            alt=""
                            width={width}
                            height={height / 2}
                            style={{ objectFit: "cover" }}
                        />
                    )}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HomeSlider;
