import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import './DidYouKnow.css';
import '../content/didYouKnowCards';
import didYouKnowCards from '../content/didYouKnowCards';

console.log(didYouKnowCards);

const DidYouKnow = () => {
    return (
        <div className='bg-gray-100 py-16 px-4 sm:px-6 lg:px-8'>
            <h3 className='text-3xl font-bold text-gray-800 mb-8 text-center'>
                Did You Know?
            </h3>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                navigation={true}
                modules={[EffectCoverflow, Navigation, Pagination]}
                className='DidYouKnowSwiper'
            >
                <>
                    {didYouKnowCards.map((slide, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                                    <img
                                        src={slide.img}
                                        alt={slide.title}
                                        className='w-full'
                                    />
                                    <div className='px-6 py-4'>
                                        <h3 className='text-xl font-bold text-gray-800 mb-8 text-center'>
                                            {slide.title}
                                        </h3>
                                        <p className='text-gray-800 text-justify'>
                                            {slide.description}
                                        </p>
                                        <a
                                            href={slide.link.url}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='mt-4 inline-block bg-neutral-200 px-4 p-2 rounded-md'
                                        >
                                            <span className='text-blue-800'>
                                                {slide.link.text}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </>
            </Swiper>
        </div>
    );
};

export default DidYouKnow;
