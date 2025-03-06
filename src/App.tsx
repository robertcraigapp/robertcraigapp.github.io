import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import TakeAction from './components/TakeAction';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <div className='bg-white'>
                <Navigation />
                <div className='pt-16'>
                    <Hero />
                    <About />
                    <TakeAction />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
