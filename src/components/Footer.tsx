const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-8'>
                <div>
                    <h3 className='text-xl font-semibold mb-4'>
                        End Private Prisons Arizona
                    </h3>
                    <p className='text-gray-400'>
                        A coalition dedicated to ending the privatization of
                        incarceration and redirecting resources toward more just
                        and effective solutions.
                    </p>
                </div>
                <div>
                    <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
                    <ul className='space-y-2'>
                        <li>
                            <a href='#about' className='hover:text-blue-400'>
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href='#impact' className='hover:text-blue-400'>
                                The Issue
                            </a>
                        </li>
                        <li>
                            <a
                                href='#take-action'
                                className='hover:text-blue-400'
                            >
                                Get Involved
                            </a>
                        </li>
                        <li>
                            <a
                                href='#resources'
                                className='hover:text-blue-400'
                            >
                                Resources
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-semibold mb-4'>
                        Contact & Social
                    </h3>
                    <div className='flex space-x-4'>
                        <a href='#' className='hover:text-blue-400'></a>
                        <a href='#' className='hover:text-blue-400'></a>
                        <a href='#' className='hover:text-blue-400'></a>
                    </div>
                    <p className='mt-4 text-gray-400'>
                        Email: contact@endprivateprisonsaz.org
                    </p>
                </div>
            </div>
            <div className='mt-8 border-t border-gray-700 pt-4 text-center'>
                <p className='text-sm text-gray-400'>
                    © 2024 End Private Prisons Arizona. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
