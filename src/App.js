import Home from "../src/pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ProductList from "./pages/ProductList.jsx";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Success from "./pages/Success.jsx";
import {useSelector} from "react-redux";
function App() {
  const user=useSelector(state=>state.user.currentUser);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products/:category" element={<ProductList/>} />
      <Route path="/product/:id" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/login" element={user?<Navigate to="/"/> : <Login />} />
      <Route path="/register" element={user? <Navigate to="/"/> : <Register/>} />
      <Route path="/success" element={<Success/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
