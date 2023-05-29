import React,{useRef,useEffect} from 'react'
import './header.css';
import {NavLink,useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion'
import {Container,Row} from 'reactstrap';
import logo from '../../assets/images/eco-logo.png';
import usericon from  "../../assets/images/user-icon.png";
import {useSelector} from 'react-redux';

export const Header = () => {
  const navigate=useNavigate();
  const nav__link=[
    {
      path:'home',
      display:'Home'
    },
    {
      path:'shop',
      display:'Shop'
    },
    {
      path:'cart',
      display:'Cart'
    },
  ]
  const totalQuantity=useSelector(state=>state.cart.totalQuantity)
  const headerRef=useRef(null);
  const menuRef=useRef(null);
  const stickyHeaderFunc=()=>{
    window.addEventListener("scroll",()=>{
      if(
        document.body.scrollTop>80 || document.documentElement.scrollTop>80
      ){
        headerRef.current.classList.add("sticky__header");
      }else{
        headerRef.current.classList.remove("sticky__header");
      }
    });

  };
  const navigateToCart=()=>{
       navigate('/cart')
  }

  useEffect(()=>{
    stickyHeaderFunc();

    return ()=>window.removeEventListener("scroll",stickyHeaderFunc);
  })

  const menuToggle=()=>menuRef.current.classList.toggle('active__menu');
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className='nav__wrapper'>
            <div className='logo'>
               <img src={logo} alt=""/>
               <div>
                <h1>
                  Easi 
                </h1>
               </div>
              </div>
               <div className='navigation' ref={menuRef} onClick={menuToggle}>
                <ul className='menu'>
                 {
                  nav__link.map((items,index)=>(
                    <li className='nav_item' key={index}>
                      <NavLink to={items.path} className={(navClass)=>
                      navClass.isActive? "nav_active":" "}>{items.display}</NavLink>
                    </li>
                  ))
                 }
                </ul>
               </div>

               <div className='nav__icons'>
                <span className='fav_icon'><i class="ri-heart-line"></i>
               <span className='badge'>1</span>
                </span>
                <span className='cart_icon' onClick={navigateToCart}><i class="ri-shopping-bag-line"></i>
                <span className='badge'>{totalQuantity}</span>
                </span>
                <span><motion.img whileTap={{scale:1.2}} src={usericon} /></span>
                 <div className='mobile__menu' onClick={menuToggle}>
                <span><i class="ri-menu-line"></i></span>
               </div>
               </div>

              
            </div>
        </Row>
      </Container>
    </header>
  )
}
