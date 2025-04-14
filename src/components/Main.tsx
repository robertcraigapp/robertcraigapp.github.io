import About from './About';
import DidYouKnow from './DidYouKnow';
import Hero from './Hero';
import TakeAction from './TakeAction';

const Main = () => {
    return (
        <div className='pt-16'>
            <Hero />
            <About />
            <DidYouKnow />
            <TakeAction />
        </div>
    );
};
export default Main;
