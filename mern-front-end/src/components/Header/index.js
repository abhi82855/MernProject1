import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, Form, Row, Col } from 'react-bootstrap';
import './style.css';
import { useDispatch } from 'react-redux';
import { login } from '../../actions';
import { isUserLoggedIn } from '../../actions';


//signup
import { signup } from '../../actions';





const Header = (probs) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const dispatch = useDispatch();
    const userLogin = (e) => {
        e.preventDefault();
        const user = {
            email ,password
        }
        dispatch(login(user));
    }
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
        
        dispatch(isUserLoggedIn());
        
    }, [])

    return (

        <div className="header">
            <Form onSubmit={userLogin}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control 
                        // plaintext readOnly defaultValue="email@example.com"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                         />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control 
                        type="password" placeholder="Password" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export const Signup =(props)=>{
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();
    const userSignup = (e) => {
        e.preventDefault();
        const user = {
            firstName,lastName,email,password
        }
        dispatch(signup(user));
    }
    return(
        <div>
               <Form onSubmit={userSignup}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        First Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control 
                        type="text" placeholder="firstname" 
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)}
                         />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        lastName
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control 
                        type="text" placeholder="lastname" 
                        value={lastName}
                        onChange={(e)=>setLastName(e.target.value)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control 
                        type="text" placeholder="Gmail" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                         />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control 
                        type="password" placeholder="Password" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                         />
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )

}

export default Header;
