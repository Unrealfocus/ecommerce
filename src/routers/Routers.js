import {React,Route, Routes,Navigate} from 'react-router-dom'
import { Cart,Checkout,Home,Login,ProductDetails,Shop,Signup } from "../pages";
const Routers = () => {
  return (
    <Routes>
       <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='shop/:id' element={<ProductDetails/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='signup' element={<Signup/>}/>
    </Routes>
  )
}
export default Routers;
