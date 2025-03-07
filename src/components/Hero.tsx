const Hero = () => {
    return (
        <div
            id='home'
            className='relative bg-gray-800 text-white py-24 px-4 sm:px-6 lg:px-8'
            style={{
                backgroundImage: `url(/sushil-nash-cV2mfX1yLMQ-unsplash.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundBlendMode: 'overlay',
            }}
        >
            <div className='max-w-4xl mx-auto text-center'>
                <h2 className='text-4xl font-extrabold mb-6'>
                    Ending Private Prisons in Arizona
                </h2>
                <p className='text-xl mb-8'>
                    We are a diverse coalition working to redirect resources,
                    change policies, and end the privatization of incarceration
                    in Arizona.
                </p>
                <div className='flex justify-center space-x-4'>
                    <a
                        href='#'
                        className='mt-4 inline-block bg-neutral-700 hover:bg-neutral-600 px-4 p-2 rounded-md'
                    >
                        <span className='text-blue-100'>Get Involved</span>
                    </a>
                    <a
                        href='#'
                        className='mt-4 inline-block bg-neutral-700 hover:bg-neutral-600 px-4 p-2 rounded-md'
                    >
                        <span className='text-blue-100'>Learn More</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
