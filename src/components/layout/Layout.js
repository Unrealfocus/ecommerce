import React from 'react'
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import Routers from '../../routers/Routers';

export const Layout = () => {
  return (
    <div>
        <Header/>
        <div>
            <Routers/>
        </div>
       <Footer/>
    </div>
  )
}
