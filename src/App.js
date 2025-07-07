import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Realvest/Home';
import About from './Realvest/About';
import Properties from './Realvest/Properties';
import Blogs from './Realvest/Blogs';
import Contact from './Realvest/Contact';
import Notfoundpage from'./Realvest/Notfoundpage';
import Login from './Realvest/Login';
import Register from './Realvest/Register';
import Details from './Realvest/Details';
import Fullblogs from './Realvest/Fullblogs';
import Privacypolicy from './Realvest/Privacypolicy';
import Terms from './Realvest/Terms';
import ScrollToTopButton from './Realvest/Scroolbtn';
import Paymentgateway from './Realvest/Paymentgateway';



function App() {

  return (
    
    <>
<ScrollToTopButton/>

<Routes>
<Route path='/'element={<Home/>} />
<Route path='/home'element={<Home/>} />
<Route path='/about'element={<About/>} />
<Route path='/properties'element={<Properties/>} />
<Route path='/blogs'element={<Blogs/>} />
<Route path='/contact'element={<Contact/>} />
<Route path='/login'element={<Login/>} />
<Route path='/register' element={<Register/>}/>
<Route path='/privacy-policy' element={<Privacypolicy/>}/>
<Route path='/terms' element= {<Terms/>}/>
<Route path='/details/:id' element={<Details/>}/>
<Route path='/blogpost/:id' element={<Fullblogs/>}/>
<Route path='/payment' element={<Paymentgateway/>}></Route>
<Route path='*' element={<Notfoundpage/>}/>
</Routes>
    </>
  );
}

export default App;
