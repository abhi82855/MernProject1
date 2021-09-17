import React from 'react';
import Header from '../Header'
// import { Signup } from '../Header';
import MenuHeader from '../MenuHeader'

const Layout=(props) =>{
  return (
    <>
    <Header/>
    {/* <Signup/> */}
    <MenuHeader/>
    {props.children}
    </>
  );
}
export default Layout