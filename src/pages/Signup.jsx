import React,{useState} from 'react'
import Helmet from '../components/Helmet/Helmet'
import {Container,Row,Col,Form,FormGroup} from "reactstrap"
import {Link} from "react-router-dom"
import '../styles/Login.css'
import {motion} from 'framer-motion'

const Signup = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [userName,setUserName] = useState('')
  return (
    <Helmet title='signup'>
      <section>
        <Container>
           <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Signup</h3>
              <Form className='auth__form'>
              <FormGroup className='form__group'>
                     <input type="text" placeholder='Username'
                     value={userName} onChange={e=>setUserName(e.target.value)} />
                </FormGroup>
                <FormGroup className='form__group'>
                     <input type="email" placeholder='Enter your email'
                     value={email} onChange={e=>setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup className='form__group'>
                     <input type="password" placeholder='Enter your password' 
                      value={password} onChange={e=>setPassword(e.target.value)}/>
                </FormGroup>
                <motion.button whileTap={{scale:1.2}} type='submit' className="buy__btn auth__btn">Create an Account</motion.button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
              </Form>
            </Col>
           </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Signup