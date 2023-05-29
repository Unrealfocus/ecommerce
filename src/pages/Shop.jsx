import React,{useState} from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import '../styles/shop.css'
import products from '../assets/data/products'
import ProductLists from '../components/UI/ProductList'
const Shop = () => {
  const [productsData,setProductsData]=useState(products);
const handleFilter=(e)=>{
const filterValue=e.target.value;
if(filterValue==='sofa'){
  const filterProduct=products.filter((item)=>item.category==='sofa');
  setProductsData(filterProduct);
}
else if(filterValue==='mobile'){
  const filterProduct=products.filter((item)=>item.category==='mobile');
  setProductsData(filterProduct);
}
else if(filterValue==='chair'){
  const filterProduct=products.filter((item)=>item.category==='chair');
  setProductsData(filterProduct);
}
else if(filterValue==='wireless'){
  const filterProduct=products.filter((item)=>item.category==='wireless');
  setProductsData(filterProduct);
}
else if(filterValue==='watch'){
  const filterProduct=products.filter((item)=>item.category==='watch');
  setProductsData(filterProduct);  
}
  }

  const handleSearch=(e)=>{
    const searchTerm=e.target.value;
    const searchProducts=products.filter((item)=>item.productName.
    toLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(searchProducts);
  }
  return (
    <Helmet title='shop'>
         <CommonSection title="products"/>
         <section>
          <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className="filter__widget">
               <select onChange={handleFilter}>
                <option>Filter By Category</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">Mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
               </select>
              </div>
            </Col>
            <Col lg='3' md='6' className='text-end'>
            <div className="filter__widget">
               <select>
                <option>Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
               </select>
              </div>
            </Col>
            <Col lg='6' md='12'>
              <div className="search__box">
                <input type="text" placeholder='search.....' onChange={handleSearch}/>
                <span>
                  <i class='ri-search-line'></i>
                </span>
              </div>
            </Col>
          </Row>
          </Container>
         </section>
         <section>
          <Container>
            <Row>
              {productsData.lenght===0?(<h1 className='text-center fs-4'>No Product Found</h1>):<ProductLists data={productsData}/>}
            </Row>
          </Container>
         </section>
    </Helmet>
  )
}

export default Shop