import './App.css';
import Home from './component/home/Home';
import Review from './component/review/Review';
import WithOutNav from './component/Layout/WithOutNav';
import WithNav from './component/Layout/WithNav';
import Sign from './component/authentication/Sign';
import PrivateOutlet from './component/PrivateOutlet/PrivateOutlet';
import { createContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Shipment from './component/Shipment/Shipment';
import ProductDetail from './component/ProductDetail/ProductDetail';
import Inventory from './component/Inventory/Inventory';

export const emaJohnContext = createContext();

function App() {
  return (
    <emaJohnContext.Provider value={[]}>
      <Router>
        <Routes>
          <Route element={<WithOutNav />}>
            <Route path='/login' element={<Sign />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path='/' element={<Home />} />
            <Route path='/product/:productKey' element={<ProductDetail />} />
            <Route path='/review' element={<Review />} />
            <Route path='/*' element={<PrivateOutlet />} >
              <Route path='shipment' element={<Shipment />} />
              <Route path='inventory' element={<Inventory />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </emaJohnContext.Provider>
  );
}

export default App;
