import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Reviews from './Pages/Reviews/Reviews';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReviews from './Pages/Dashboard/MyReviews';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/Authentication/RequireAdmin/RequireAdmin';

function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyAppointments />} />
          <Route path='review' element={<MyReviews />} />
          <Route path='users' element={<RequireAdmin><AllUsers /></RequireAdmin>} />
        </Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>

      <ToastContainer />

    </div>
  );
}

export default App;
