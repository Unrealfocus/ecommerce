import React from 'react'
import {motion} from 'framer-motion';
import {Col} from 'reactstrap'
import '../../styles/productCard.css'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {cartActions} from '../../redux/slices/cartSlice';
// import {toastify} from 'react-toastify'
const ProductCard = ({items}) => {
  const dispatch=useDispatch()

  const addToCart=()=>{
    dispatch(cartActions.addItem({
      id:items.id,
      productName:items.productName,
      price:items.price,
      imgUrl:items.imgUrl
    }));
      alert("product added to the cart");
  }

  return (
    <Col lg='3' md='4'>
    <div className='product__item'>
        <div className='product__img'>
            <motion.img whileHover={{scale:0.9}} src={items.imgUrl}/>
        </div>
        <div className='p-2 product__info'>
        <h3 className='product__name'><Link to={`/shop/${items.id}`}>{items.productName}</Link></h3>
        <span className='d-block'>{items.category}</span>
        </div>
        <div className='product__card-bottom d-flex align-items-center
        justify-content-between p-2'>
            <span className='price'>${items.price}</span>
            <motion.span whileTap={{scale:1.1}} onClick={addToCart}><i class="ri-add-line"></i></motion.span>
        </div>
    </div>
    </Col>
  )
}

export default ProductCard;