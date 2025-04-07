import { Link } from 'wouter';
import './TakeAction.css';

const TakeAction = () => {
    return (
        <section
            id='take-action'
            className='bg-gray-100 py-16 px-4 sm:px-6 lg:px-8'
        >
            <div className='max-w-4xl mx-auto text-center'>
                <h2 className='text-3xl font-bold text-gray-900 mb-8'>
                    How You Can Help
                </h2>
                <div className='grid md:grid-cols-3 gap-8'>
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <h3 className='text-xl font-semibold mb-4'>
                            Join the Coalition
                        </h3>
                        <p className='text-gray-600'>
                            Connect with us, sign our commitment letter, and
                            become part of a diverse network working to end
                            private prisons.
                        </p>
                        <span
                            //href='#'
                            className='mt-4 inline-block bg-neutral-200 px-4 p-2 rounded-md noCursor'
                        >
                            <span className='text-blue-800'>Coming Soon</span>
                        </span>
                    </div>
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <h3 className='text-xl font-semibold mb-4'>
                            Stay Informed
                        </h3>
                        <p className='text-gray-600'>
                            Access our policy briefs, infographics, and
                            educational resources to understand the impact of
                            private prisons.
                        </p>
                        <Link
                            href='/resources'
                            className='mt-4 inline-block bg-neutral-700 hover:bg-neutral-600 px-4 p-2 rounded-md'
                        >
                            <span className='text-blue-100'>
                                View Resources
                            </span>
                        </Link>
                    </div>
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <h3 className='text-xl font-semibold mb-4'>Advocate</h3>
                        <p className='text-gray-600'>
                            Participate in events, engage with policymakers, and
                            help spread awareness about the issues surrounding
                            private prisons.
                        </p>
                        <span
                            //href='#'
                            className='mt-4 inline-block bg-neutral-200 px-4 p-2 rounded-md noCursor'
                        >
                            <span className='text-blue-800'>Coming Soon</span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TakeAction;
