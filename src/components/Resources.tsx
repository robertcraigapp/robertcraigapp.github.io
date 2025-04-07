import './resources.css';
import ArizonaInfographic from '../assets/arizona-infographic.png';

const Resources = () => {
    return (
        <div className='py-8'>
            <div className='max-w-4xl mx-auto text-center'>
                <h4 className='mb-6 text-gray-700 text-2xl mx-6'>
                    Browse through resources designed to help educate others
                    about the impact private prisons have had.{' '}
                </h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 justify-center'>
                <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
                    <div className='p-5'>
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                            Private Prisons in Arizona
                        </h5>

                        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                            Explore the impact private prisons have had in
                            Arizona with data.
                        </p>
                        <img
                            className='rounded-t-lg max-w-9/10 pb-4 mx-auto'
                            src={ArizonaInfographic}
                            alt=''
                        />
                        <a
                            href='../src/assets/arizona-infographic.png'
                            className='mt-4 inline-block bg-neutral-700 hover:bg-neutral-600 px-4 p-2 rounded-md'
                            target='_blank'
                        >
                            <span className='text-blue-100'>
                                Get Infographic
                            </span>
                        </a>
                    </div>
                </div>
                <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
                    <div className='p-5'>
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                            Private Prisons in the USA
                        </h5>

                        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                            Coming soon!
                        </p>
                    </div>
                </div>
                <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
                    <div className='p-5'>
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                            Private Immigration Detention
                        </h5>

                        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                            Coming soon!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;
