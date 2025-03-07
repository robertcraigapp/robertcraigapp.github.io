import Socials from './Socials';

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-8'>
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
                    <h3 className='text-xl font-semibold mb-4'>
                        Contact & Social
                    </h3>
                    <p className='mt-4 text-gray-400'>
                        Email: contact@endprivateprisonsaz.org
                    </p>
                    <Socials />
                </div>
            </div>
            <div className='mt-8 border-t border-gray-700 pt-4 text-center'>
                <p className='text-sm text-gray-400'>
                    © 2025 End Private Prisons Arizona. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
