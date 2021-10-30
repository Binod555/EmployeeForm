import './App.css';
import { BrowserRouter,Redirect,Route } from 'react-router-dom';
import About from './About';

import Contact from './Contact';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <switch>
    <Navbar/>
    <Route exact path="/" component={About}/>
    <Route exact path="/Contact" component={Contact}/>
    </switch>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
