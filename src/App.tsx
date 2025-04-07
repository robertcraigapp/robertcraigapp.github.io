import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';

import { Route, Switch } from 'wouter';
import Resources from './components/Resources';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <div className='bg-white'>
                <Route>
                    <Navigation />
                </Route>
                <Switch>
                    <Route path='/resources' component={Resources} />
                    <Route>
                        <Main />
                    </Route>
                </Switch>
                <Route>
                    <Footer />
                </Route>
            </div>
        </>
    );
}

export default App;
