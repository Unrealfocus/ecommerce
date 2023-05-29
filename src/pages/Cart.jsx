import React from 'react'
import '../styles/cart.css'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import {Container,Row,Col} from 'reactstrap'
import {motion} from 'framer-motion'
import {cartActions} from '../redux/slices/cartSlice'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

const Cart = () => {
  const cartItems=useSelector(state=>state.cart.cartItems)
  const totalAmount=useSelector((state)=>state.cart.totalAmount)
  return (
   <Helmet title="cart">
       <CommonSection/>
       <Container>
        <Row>
          <Col lg='9 mt-4'>
           {
            cartItems.length===0?(<h2 className='fs-4 text-center empty__cart'>No item added to the cart</h2>):(
              <table className="table borderde">
              <thead>
                <tr>
                <td>Image</td>
                <td>Title</td>
                <td>Price</td>
                <td>Qty</td>
                <td>Delete</td>
                </tr>
              </thead>
                   <tbody>
                   {
                    cartItems.map((item,index)=>(
                     <Tr item={item} key={index}/>
                    ))
                   }
                   </tbody>
              </table>
            )
           }
           
          </Col>
          {cartItems.length!==0 && ( <Col lg='3 mt-4 mb-4'>
          <div>
              <h6 className='d-flex align-items-center
              jsutify-content-between'>Subtotal:  
              <span className='fs-4 fw-bold'>${totalAmount}</span></h6>
             
            </div>
            <p className='fs-6 mt-2'>taxes and shipping will calcualte in checkout</p>
            <div>
              <motion.button whileTap={{scale:1.2}} className="buy__btn w-100 "><Link to='/checkout'>Checkout</Link></motion.button>
              <motion.button   whileTap={{scale:1.2}} className="buy__btn w-100 mt-3"><Link to='/shop'>Continue shopping</Link></motion.button>
            </div>
          </Col>)}
        </Row>
       </Container>
   </Helmet>
  );
};
const Tr=({item})=>{
   const dispatch =useDispatch()
   const deleteproduct=()=>{
    dispatch(cartActions.deleteItem(item.id))
   }
  return  <tr>
  <td><img src={item.imgUrl} alt="product" /></td>
  <td>{item.productName}</td>
  <td>{item.price}</td>
  <td>{item.quantity}</td>
  <td><motion.i whileTap={{scale:2.0}}
    class='ri-delete-bin-line'
    onClick={deleteproduct}
  ></motion.i></td>
</tr>
}

export default Cart