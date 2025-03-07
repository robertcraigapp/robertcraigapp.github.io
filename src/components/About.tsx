const About = () => {
    return (
        <section id='about' className='bg-white py-16 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-4xl mx-auto'>
                <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
                    About Our Coalition
                </h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <div>
                        <h3 className='text-xl font-semibold mb-4'>
                            Our Mission
                        </h3>
                        <p className='text-gray-600 mb-4'>
                            We are a unified, well-organized coalition
                            leveraging diverse resources and expertise to
                            address the systemic issues of private prisons in
                            Arizona.
                        </p>
                        <h3 className='text-xl font-semibold mb-4'>
                            Our Goals
                        </h3>
                        <ul className='list-disc list-inside text-gray-600 space-y-2'>
                            <li>
                                Build a strong, diverse network of advocates
                            </li>
                            <li>Increase public and legislative awareness</li>
                            <li>
                                Redirect investments away from private prisons
                            </li>
                            <li>
                                Ultimately end the use of private prisons in
                                Arizona
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold mb-4'>
                            Our Approach
                        </h3>
                        <p className='text-gray-600 mb-4'>
                            Through strategic coalition building, policy
                            advocacy, public education, and engagement with
                            financial stakeholders, we aim to create meaningful
                            change.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
