import React, {useState} from 'react';
import {Container} from 'react-bootstrap';
import {Swiper, SwiperSlide} from 'swiper/react';
import GameCard from '../components/pages/Home/HeaderSection/GameCard';
import SwiperCore, {Controller, Navigation, Pagination} from 'swiper';

const Swipe = () => {
    const [controlledSwiper, setControlledSwiper] = useState(null)

    SwiperCore.use([Pagination, Controller, Navigation])

    return (
        <Container className={'pt-5'}>
            <div className={'mt-5 pt-5'}>
                <Swiper spaceBetween={50} slidesPerView={3} className={'py-5 px-5'} loop pagination controller={{ control: controlledSwiper }} navigation >
                    <SwiperSlide>
                        {({isNext}) => (
                            <GameCard image={'miles-morales.jpg'} title={'Spooderman'} isActive={isNext}/>
                        )}
                    </SwiperSlide>
                    <SwiperSlide>
                        {({isNext}) => (
                            <GameCard image={'ratchet.jpg'} isActive={isNext}/>
                        )}
                    </SwiperSlide>
                    <SwiperSlide>
                        {({isNext}) => (
                            <GameCard image={'forbidden-west.jpg'} isActive={isNext}/>
                        )}
                    </SwiperSlide>
                    <SwiperSlide>
                        {({isNext}) => (
                            <GameCard image={'demons.jpg'} isActive={isNext}/>
                        )}
                    </SwiperSlide>
                </Swiper>
            </div>
        </Container>
    );
};

export default Swipe;