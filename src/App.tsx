import { Routes, Route, Link } from 'react-router-dom';
import CustomerComponent from "./component/CustomerComponent";
import "./App.css";
import EmployeeComponent from "./component/EmployeeComponent";
import Order from "./component/Order";
import OrderItems from "./component/OrderItems";
import Payment from "./component/Payment";
import PaymentMethods from "./component/PaymentMethods";
import Products from "./component/Products";
import ShippingMethods from "./component/Shippings";
import Shippings from "./component/ShippingMethods";
import Home from './component/Home';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/employee" element={<EmployeeComponent />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/customer" element={<CustomerComponent />}></Route>
        <Route path="/orderitems" element={<OrderItems />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/paymentmethods" element={<PaymentMethods />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/shippingmethods" element={<ShippingMethods />}></Route>
        <Route path="/shippings" element={<Shippings />}></Route>
      </Routes>
  )
}

export default App;
