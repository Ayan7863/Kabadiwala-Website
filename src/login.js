
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SIgn_img from './SIgn_img';

const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: '',
    password: '',
  });

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval({
      ...inpval,
      [name]: value,
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem('useryoutube');

    const { email, password } = inpval;

    if (email === '' || password === '') {
      toast.error('Please enter both email and password', {
        position: 'top-center',
      });
      return;
    }

    if (getuserArr) {
      const userdata = JSON.parse(getuserArr);
      const user = userdata.find(
        (el) => el.email === email && el.password === password
      );

      if (!user) {
        toast.error('Invalid email or password', {
          position: 'top-center',
        });
        return;
      }

      if (user.userType === 'Admin') {
        console.log("admin login succesfulyy");
        
                           localStorage.setItem("user_login", JSON.stringify(user))
        
        history('/admin');
      } else {
        console.log("user login succesfulyy");
        
                           localStorage.setItem("user_login", JSON.stringify(user))
        
        history('/scraprates');
      }

    }
    
  };

  return (
    <>
    <br />
          <br />
          <br />
          <br />
          <br />
          
      {/* Your login form JSX */}
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: '100%' }}>
            <h3 className="text-center col-lg-6">Sign IN</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="col-lg-6"
                onClick={addData}
                style={{ background: 'rgb(67, 185, 127)' }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Don't have an account?{' '}
              <span>
                <NavLink to="/signin">SignUp</NavLink>
              </span>{' '}
            </p>
          </div>
          <SIgn_img />
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
