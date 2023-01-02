import logo from './logo.svg';
import './App.css';
import { AddUser, Login, ThreadsList } from './components';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AboutPageUser from './pages/AboutPageUser';
import AboutPageAdmin from './pages/AboutPageAdmin';
import HomePageAdmin from './pages/HomePageAdmin';
import LandingPage from './pages/LandingPage';
import AboutPageLanding from './pages/AboutPageLanding';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import MentalHealth from './pages/MentalHealth';
import Politics from './pages/Politics';
import Other from './pages/Other';
import Profile from './pages/Profile';
import AddImg from './components/AddUser/AddImg';
import DetailPost from './pages/DetailPost';
function App() {
  return (
    <Router>
    <Routes>
     <Route path='/register' exact element={<AddUser/>}/>
     <Route path='/login' exact element={<Login/>}/>
     <Route path="/" element={<LandingPage />}/>
     <Route path="/admin" element={<HomePageAdmin />}/>
     <Route path="/aboutpageuser" element={<AboutPageUser />}/>
     <Route path="/aboutpageadmin" element={<AboutPageAdmin />}/>
     <Route path="/aboutpagelanding" element={<AboutPageLanding />}/>
     <Route path="/profile/:id" element={<Profile />}/>
     <Route path="/detail/:id" element={<DetailPost />}/>
     <Route path="/add-profile-pict" element={<AddImg />}/>
     <Route path='/home'>
            <Route index element={<Home/>}/>
            <Route path='mental' element={<MentalHealth/>}/>
            <Route path='politics' element={<Politics/>}/>
            <Route path='other' element={<Other/>}/>
     </Route>
   </Routes>
 </Router>
    
  );
}

export default App;
