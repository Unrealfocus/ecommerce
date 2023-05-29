import React,{useState,useRef,useEffect} from 'react'
import {Container,Row,Col} from 'reactstrap'
import {useParams} from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/product-details.css'
import {motion} from 'framer-motion'
import ProductList from '../components/UI/ProductList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
const ProductDetails = () => {
  const reviewUser=useRef('')
  const reviewMsg=useRef('')
  const [rating,setRating]=useState(null)
  const [tab,setTab]=useState('desc')
  const {id}=useParams()
  const dispatch=useDispatch()
  const product=products.find(item=>item.id===id)
  const relatedProducts=products.filter((item)=> item.category===product.category)

  const submitHandle=(e)=>{
    e.preventDefault()
     const reviewUserName=reviewUser.current.value
     const reviewUserMsg=reviewMsg.current.value

     const reviewobj={
      userName:reviewUserName,
      text:reviewUserMsg,
      rating,
     };
     console.log(reviewobj)
  }
     const {imgUrl,productName,price} =product
  const addToCart=()=>{
    dispatch(
      cartActions.addItem({
        id,
        image:product.imgUrl,
        productName,
        price
      })
    )
  }
  useEffect(()=>{
    window.scrollTo(0,0);
  },[product])
  return (
    <Helmet title={product.productName}>
      <CommonSection title={product.productName}/>
      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg="6">
              <img src={product.imgUrl} />
            </Col>
            <Col lg="6"><div className="product__details">
                <h2>{product.productName}</h2>
                <div className="product__rating d-flex align-item-center gap-5 mb-3">
                  <div>
                    <span><i class="ri-star-s-fill"></i></span>
                    <span><i class="ri-star-s-fill"></i></span>
                    <span><i class="ri-star-s-fill"></i></span>
                    <span><i class="ri-star-s-fill"></i></span>
                    <span><i class="ri-star-half-s-fill"></i></span>
                  </div>
                  <p><span>{product.avgRating}</span> ratings</p>
                </div>
                <div className='d-flex align-items-center gap-5'>
                <span className='product__price'>${product.price}</span>
                <span className='product__category'>Category:{product.category.toUpperCase()}</span>
                </div>
                
                <p>{product.shortDesc}</p>

                <motion.button whileTap={{scale:1.2}} className="buy__btn" onClick={addToCart}>Add to Cart</motion.button>
              </div>
              </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6 className={`${tab==="desc"?"active__tab":""}`}
                onClick={()=>setTab('desc')}>Description</h6>
                <h6 className={`${tab==="rev"?"active__tab":""}`}
                onClick={()=>setTab('rev')}>Reviews ({product.reviews.length})</h6>
              </div>
              {
                 tab==='desc'?( <div className="tab__content mt-4">
                 <p>{product.description}</p>
               </div>) :(<div className='product__review mt-4'>
                <div className='review__wrapper'>
                  <ul>
                    {
                      product.reviews?.map((item,index)=>(
                        <li key={index} className='mt-4'>
                          <h6>Jude Dickson</h6>
                           <span>{item.rating} (rating)</span>
                            <p>{item.text}</p>
                        </li>
                      ))
                    }
                  </ul>
                  <div className="review__form">
                    <h5>Leave Your Experience</h5>
                    <form action="" onSubmit={submitHandle}>
                      <div className="form__group">
                        <input type="text" placeholder='Enter Name' ref={reviewUser} required/>
                      </div>
                      <div className="form__group d-flex
                      align-items-center gap-5 rating__group">
                        <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(1)}>1<i class='ri-star-s-fill'></i></motion.span>
                        <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(2)}>2<i class='ri-star-s-fill'></i></motion.span>
                        <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(3)}>3<i class='ri-star-s-fill'></i></motion.span>
                        <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(4)}>4<i class='ri-star-s-fill'></i></motion.span>
                        <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(5)}>5<i class='ri-star-s-fill'></i></motion.span>
                      </div>
                      <div className="form__group">
                      <textarea  cols="30" rows="5" ref={reviewMsg} placeholder='write your review' required></textarea>
                      </div>

                      <motion.button whileTap={{scale:1.2}} className='buy__btn'>Submit</motion.button>
                    </form>
                  </div>
                </div>
               </div>)
              }
             
            </Col>
            <Col lg='12' className='mt-5'>
              <h2 className='related__title'>You might also like</h2>
            </Col>
            <ProductList data={relatedProducts}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetails