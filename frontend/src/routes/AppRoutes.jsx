import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Packages from '../pages/Packages';
import PackageDetails from '../pages/PackageDetails';
import Booking from '../pages/Booking';
import BookingSuccess from '../pages/BookingSuccess';
import MyBookings from '../pages/MyBookings';
import Profile  from '../pages/Profile';
import Wishlist from '../pages/Wishlist';
import Settings from '../pages/Settings';
function Approuter(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/Packages' element={<Packages/>}/>
            <Route path='/package-details' element={<PackageDetails/>}/>
            <Route path='/booking' element={<Booking/>}/>
            <Route path='/booking-success' element={<BookingSuccess/>}/>
            <Route path="/my-bookings" element={<MyBookings/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    );
}
export default Approuter;