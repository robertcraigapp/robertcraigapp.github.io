const Hero = () => {
    return (
        <div
            id='home'
            className='relative bg-gray-800 text-white py-24 px-4 sm:px-6 lg:px-8'
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
                        href='#take-action'
                        className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium'
                    >
                        Get Involved
                    </a>
                    <a
                        href='#impact'
                        className='bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md text-lg font-medium'
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
