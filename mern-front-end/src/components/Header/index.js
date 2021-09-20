import React, { useState } from 'react';
import './style.css';
import flipkartLogo from '../../images/logo/flipkart.png';
import goldenStar from '../../images/logo/golden-star.png';
import supermart from '../../images/logo/supermart.png'
import { IoIosArrowDown, IoIosCart, IoIosSearch } from 'react-icons/io';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import { useDispatch } from 'react-redux';
import { login } from '../../actions';
import { signout } from '../../actions';
import { isUserLoggedIn } from '../../actions';
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu
} from '../MaterialUI';

/**
* @author
* @function Header
**/

const Header = (props) => {

  const [loginModal, setLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const userLogin = () => {
        dispatch(login({ email, password }));
    };
    const logout=()=>{
      dispatch(signout())
    }
    const auth = useSelector((state) => state.auth);
    useEffect(() => {

         if(auth.authenticate)
         {
           setLoginModal(false)
         }


    }, [auth.authenticate])

const renderLoggedInMenu=()=>{
  return(
    <DropdownMenu
    menu={
      <a className="fullName" >
       <span> {auth.user.fullName}</span>
      </a>
    }
    menus={[
       { label: 'My Profile', href: '', icon: null },
      { label: 'SuperMart Plus Zone', href: '', icon: null },
      { label: 'Orders', href: '', icon: null },
      { label: 'Wishlist', href: '', icon: null },
      { label: 'Rewards', href: '', icon: null },
      { label: 'Gift Cards', href: '', icon: null },
      { label: 'Log Out', href: '', icon: null,onClick:logout },
    ]}
    // firstMenu={
    //   <div className="firstmenu">
    //     <span>New Customer?</span>
    //     <a style={{ color: '#2874f0' }}>Sign Up</a>
    //   </div>
    // }
  />
  );

}
const renderNonLoggedInMenu=()=>{
  return(
    <DropdownMenu
    menu={
      <a className="loginButton" onClick={() => setLoginModal(true)}>
        Login
      </a>
    }
    menus={[
       { label: 'My Profile', href: '', icon: null },
      { label: 'SuperMart Plus Zone', href: '', icon: null },
      { label: 'Orders', href: '', icon: null },
      { label: 'Wishlist', href: '', icon: null },
      { label: 'Rewards', href: '', icon: null },
      { label: 'Gift Cards', href: '', icon: null },
    ]}
    firstMenu={
      <div className="firstmenu">
        <span>New Customer?</span>
        <a style={{ color: '#2874f0' }}>Sign Up</a>
      </div>
    }
  />
  );

}

  return (
    <div className="header">
      <Modal
        visible={loginModal}
        onClose={() => setLoginModal(false)}
      >
        <div className="authContainer">
          <div className="row">
            <div className="leftspace">
              <h2>Login</h2>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className="rightspace">


              <MaterialInput
                type="text"
                label="Enter Email/Enter Mobile Number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <MaterialInput
                type="password"
                label="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // rightElement={<a href="#">Forgot?</a>}
              />
              <MaterialButton
                title="Login"
                bgColor="#333"
                textColor="#fff"
                style={{
                  margin: '40px 0 20px 0'
                }}

                  onClick={userLogin}
              />
                <p>OR</p>

              <MaterialButton
                title="Request OTP"
                bgColor="#cccccc"
                textColor="#ffff"
                style={{
                  margin: '20px'
                }}

              />



            </div>
          </div>
        </div>
      </Modal>
      <div className="subHeader">
        <div className="logo">
          <a href="">
            {/* <img src={flipkartLogo} className="logoimage" alt="" /> */}
             <img src={supermart} className="logoimage" alt="" />
          </a>
          <a style={{ marginTop: '-10px' }}>
            {/* <span className="exploreText">Explore</span> */}
            <span className="plusText">sMart</span>
            {/* <img src={goldenStar} className="goldenStar" alt="" /> */}
          </a>
        </div>
        <div style={{
          padding: '0 10px'
        }}>
          <div className="searchInputContainer">
            <input
              className="searchInput"
              placeholder={'search for products, brands and more'}
            />
            <div className="searchIconContainer">
              <IoIosSearch style={{
                color: '#2874f0'
              }} />
            </div>

          </div>
        </div>
        <div className="rightMenu">
           {
             auth.authenticate?
             renderLoggedInMenu():renderNonLoggedInMenu()
             }
          <DropdownMenu
            menu={
              <a className="more">
                <span>More</span>
                <IoIosArrowDown />
              </a>
            }
            menus={[
              { label: 'Notification Preference', href: '', icon: null },
              { label: 'Sell on SuperMart', href: '', icon: null },
              { label: '24x7 Customer Care', href: '', icon: null },
              { label: 'Advertise', href: '', icon: null },
              { label: 'Download App', href: '', icon: null }
            ]}
          />
          <div>
            <a className="cart">
              <IoIosCart />
              <span style={{ margin: '0 10px' }}>Cart</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  )

}

export default Header







































// import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { Button, Form, Row, Col } from 'react-bootstrap';
// import './style.css';
// import { useDispatch } from 'react-redux';
// import { login } from '../../actions';
// import { isUserLoggedIn } from '../../actions';


// //signup
// import { signup } from '../../actions';





// const Header = (probs) => {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [error, setError] = useState('')

//     const dispatch = useDispatch();
//     const userLogin = (e) => {
//         e.preventDefault();
//         const user = {
//             email ,password
//         }
//         dispatch(login(user));
//     }
//     const auth = useSelector((state) => state.auth);
//     useEffect(() => {

//         dispatch(isUserLoggedIn());

//     }, [])

//     return (

//         <div className="header">
//             <Form onSubmit={userLogin}>
//                 <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
//                     <Form.Label column sm="2">
//                         Email
//                     </Form.Label>
//                     <Col sm="10">
//                         <Form.Control 
//                         // plaintext readOnly defaultValue="email@example.com"
//                         value={email}
//                         onChange={(e)=>setEmail(e.target.value)}
//                          />
//                     </Col>
//                 </Form.Group>

//                 <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
//                     <Form.Label column sm="2">
//                         Password
//                     </Form.Label>
//                     <Col sm="10">
//                         <Form.Control 
//                         type="password" placeholder="Password" 
//                         value={password}
//                         onChange={(e)=>setPassword(e.target.value)}
//                         />
//                     </Col>
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form>
//         </div>
//     )
// }

// export const Signup =(props)=>{
//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const dispatch = useDispatch();
//     const userSignup = (e) => {
//         e.preventDefault();
//         const user = {
//             firstName,lastName,email,password
//         }
//         dispatch(signup(user));
//     }
//     return(
//         <div>
//                <Form onSubmit={userSignup}>
//                 <Form.Group as={Row} className="mb-3">
//                     <Form.Label column sm="2">
//                         First Name
//                     </Form.Label>
//                     <Col sm="10">
//                         <Form.Control 
//                         type="text" placeholder="firstname" 
//                         value={firstName}
//                         onChange={(e)=>setFirstName(e.target.value)}
//                          />
//                     </Col>
//                 </Form.Group>

//                 <Form.Group as={Row} className="mb-3" >
//                     <Form.Label column sm="2">
//                         lastName
//                     </Form.Label>
//                     <Col sm="10">
//                         <Form.Control 
//                         type="text" placeholder="lastname" 
//                         value={lastName}
//                         onChange={(e)=>setLastName(e.target.value)}
//                         />
//                     </Col>
//                 </Form.Group>

//                 <Form.Group as={Row} className="mb-3">
//                     <Form.Label column sm="2">
//                         Email
//                     </Form.Label>
//                     <Col sm="10">
//                         <Form.Control 
//                         type="text" placeholder="Gmail" 
//                         value={email}
//                         onChange={(e)=>setEmail(e.target.value)}
//                          />
//                     </Col>
//                 </Form.Group>

//                 <Form.Group as={Row} className="mb-3">
//                     <Form.Label column sm="2">
//                         password
//                     </Form.Label>
//                     <Col sm="10">
//                         <Form.Control 
//                         type="password" placeholder="Password" 
//                         value={password}
//                         onChange={(e)=>setPassword(e.target.value)}
//                          />
//                     </Col>
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form>
//         </div>
//     )

// }

// export default Header;




