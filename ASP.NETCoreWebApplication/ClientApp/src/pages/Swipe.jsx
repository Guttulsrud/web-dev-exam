import React, {useState} from 'react';
import {Container} from 'react-bootstrap';
import {Swiper, SwiperSlide} from 'swiper/react';
import GameCard from '../components/pages/Home/HeaderSection/GameCard';
import SwiperCore, {Controller, Navigation, Pagination} from 'swiper';


const Swipe = () => {

    SwiperCore.use([Pagination, Controller, Navigation]);

    const testData = [
        {
            title: 'Spooderman',
            image: 'miles-morales.jpg'
        },
        {
            title: 'Ratchet',
            image: 'ratchet.jpg'
        },
        {
            title: 'Aloy',
            image: 'forbidden-west.jpg'
        },
        {
            title: 'Slayer Demons',
            image: 'demons.jpg'
        },
    ];

    return (
        <Container className={'pt-5'}>
            <div className={'mt-5 pt-5 '}>
                <Swiper spaceBetween={90} slidesPerView={3} className={'py-5 px-5'} loop pagination navigation >
                    {testData.map((slide, index) => (
                            <SwiperSlide key={`slide${index}`} >
                                {({isActive, isNext}) => (
                                    <GameCard {...slide} isActive={isNext}/>
                                )}
                            </SwiperSlide>
                    ))
                    }
                </Swiper>
            </div>
        </Container>
    );
};

export default Swipe;