import './resources.css';
// import ArizonaInfographic from '../assets/arizona-infographic.png';

const Resources = () => {
    // Array of resource objects
    const resourcesData = [
        {
            id: 1,
            title: 'Private Prisons in Arizona',
            description:
                'Explore the impact private prisons have had in Arizona with data.',
            imagePath: '/infographics/arizona-infographic.png',
            imageAlt: 'Arizona prison statistics infographic',
            linkText: 'Get Infographic',
            isReady: true,
        },
        {
            id: 2,
            title: '12 Key Facts',
            description:
                'Learn twelve key facts about private prisons and detention facilities in Arizona.',
            imagePath: '/infographics/12-facts-infographic.png',
            imageAlt: 'Arizona 12 Facts Infographic',
            linkText: 'Get Infographic',
            isReady: true,
        },
        {
            id: 3,
            title: 'Private Prisons in the USA',
            description: 'Coming soon!',
            isReady: false,
        },
        {
            id: 4,
            title: 'Private Immigration Detention',
            description: 'Coming soon!',
            isReady: false,
        },
    ];

    return (
        <div className='py-8'>
            <div className='max-w-4xl mx-auto text-center'>
                <h4 className='mb-6 text-gray-700 text-2xl mx-6'>
                    Browse through resources designed to help educate others
                    about the impact private prisons have had.
                </h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 justify-center'>
                {resourcesData.map((resource) => (
                    <div
                        key={resource.id}
                        className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'
                    >
                        <div className='p-5'>
                            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                                {resource.title}
                            </h5>
                            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                                {resource.description}
                            </p>
                            {resource.imagePath && (
                                <img
                                    className='rounded-t-lg max-w-9/10 pb-4 mx-auto'
                                    src={resource.imagePath}
                                    alt={resource.imageAlt || ''}
                                />
                            )}
                            {resource.isReady && resource.imagePath && (
                                <a
                                    href={resource.imagePath}
                                    className='mt-4 inline-block bg-neutral-700 hover:bg-neutral-600 px-4 p-2 rounded-md'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <span className='text-blue-100'>
                                        {resource.linkText || 'View Resource'}
                                    </span>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resources;
