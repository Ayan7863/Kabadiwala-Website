// import React, { useState } from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import SIgn_img from './SIgn_img'
// import { NavLink } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

// const Register = () => {

//     const history = useNavigate();

//     const [inpval, setInpval] = useState({
//         name: "",
//         email: "",
//         date: "",
//         password: "",
//         userType: ""
//     })
// const [userType, setUertype] = useState("");
// const [secretkey, setSecretKey] = useState("");
   

//     const [data,setData] = useState([]);
//     console.log(inpval);

//     const getdata = (e) => {
//         // console.log(e.target.value);


//         const { value, name } = e.target;
//         // console.log(value,name);


//         setInpval(() => {
//             return {
//                 ...inpval,
//                 [name]: value
//             }
//         })

//     }

//     const addData = (e) => {
//         if(userType=="Admin" && secretkey != "AyanT"){
//             e.preventDefault();
//             alert("Invalid Admin");
//         } else {

         
//         e.preventDefault();

//         const { name, email, date, password,userType } = inpval;

//         if (name === "") {
//             toast.error(' name field is requred!',{
//                 position: "top-center",
//             });
//         } else if (email === "") {
//              toast.error('email field is requred',{
//                 position: "top-center",
//             });
//         } else if (!email.includes("@")) {
//              toast.error('plz enter valid email addres',{
//                 position: "top-center",
//             });
//         } else if (date === "") {
//              toast.error('date field is requred',{
//                 position: "top-center",
//             });
//         } else if (password === "") {
//              toast.error('password field is requred',{
//                 position: "top-center",
//             });
//         } else if (password.length < 5) {
//              toast.error('password length greater five',{
//                 position: "top-center",
//             });
//         } else if (userType === "") {
//             toast.error('usertype field is requred',{
//                position: "top-center",
//            });
//        }
//         else {
//             console.log("data added succesfully");
//             history("/login")
//             localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

//         }
//       }

//     }

//     return (
//         <>
//             {/* <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/> */}
                    
//             <div className="container mt-3">
//                 <section className='d-flex justify-content-between'>
//                     <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
//                         <h3 className='text-center col-lg-6'>Sign Up</h3>
//                         <div>
//                             Register AS 
//                             <input type='radio' name='userType' value="user" onChange={getdata}/>user
//                             <input type='radio' name='userType' value="Admin" onChange={getdata}/>Admin
                            
//                         </div>
                        
//                         <Form >
//                         {userType=="Admin"?
//                         <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

//                           <Form.Control type="text" name='secret key' onChange={(e)=> setSecretKey(e.target.value)} placeholder="Enter Secret Key" />
//                            </Form.Group>:null}
//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

//                                 <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
//                             </Form.Group>
//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

//                                 <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
//                             </Form.Group>

//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

//                                 <Form.Control onChange={getdata} name='date' type="date" />
//                             </Form.Group>

//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

//                                 <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
//                             </Form.Group>
//                             <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
//                                 Submit
//                             </Button>
//                         </Form>
//                         <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
//                     </div>
//                     <SIgn_img />
//                 </section>
//                 <ToastContainer />
//             </div>
//         </>
//     )
// }

// export default Register;

// Register.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import SIgn_img from './SIgn_img';

// const Register = () => {
//   const history = useNavigate();

//   const [inpval, setInpval] = useState({
//     name: '',
//     email: '',
//     date: '',
//     password: '',
//     userType: 'user', // Default user type
//   });

//   const [secretKey, setSecretKey] = useState('');
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [data,setData] = useState([]);

//   const getdata = (e) => {
//     const { value, name } = e.target;
//     if (name === 'userType') {
//       if (value === 'Admin') {
//         setIsAdmin(true);
//       } else {
//         setIsAdmin(false);
//       }
//     }
//     setInpval({
//       ...inpval,
//       [name]: value,
//     });
//   };

//   const addData = (e) => {
//     e.preventDefault();

//     if (isAdmin && secretKey !== 'AyanT') {
//       toast.error('Invalid Admin Secret Key', {
//         position: 'top-center',
//       });
//       return;
//     }

//     const { name, email, date, password, userType } = inpval;

//     if (!name || !email || !date || !password || !userType) {
//       toast.error('All fields are required!', {
//         position: 'top-center',
//       });
//     } else if (!email.includes('@')) {
//       toast.error('Please enter a valid email address', {
//         position: 'top-center',
//       });
//     } else if (password.length < 5) {
//       toast.error('Password must be at least 5 characters long', {
//         position: 'top-center',
//       });
//     } else {
//       console.log('Data added successfully');
//       // history('/login');
//       // const userArr = JSON.parse(localStorage.getItem('useryoutube')) || [];
//       // userArr.push(inpval);
//       // localStorage.setItem('useryoutube', JSON.stringify(userArr));
//       // console.log("data added succesfully");
//              history("/login")
//              localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

//     }
//   };

//   return (
//     <>
//       <div className="container mt-3">
//         <section className="d-flex justify-content-between">
//           <div className="left_data mt-3 p-3" style={{ width: '100%' }}>
//             <h3 className="text-center col-lg-6">Sign Up</h3>
//             <div>
//               Register AS
//               <input
//                 type="radio"
//                 name="userType"
//                 value="user"
//                 onChange={getdata}
//                 checked={!isAdmin}
//               />
//               user
//               <input
//                 type="radio"
//                 name="userType"
//                 value="Admin"
//                 onChange={getdata}
//                 checked={isAdmin}
//               />
//               Admin
//             </div>

//             {isAdmin && (
//               <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//                 <Form.Control
//                   type="text"
//                   name="secretKey"
//                   onChange={(e) => setSecretKey(e.target.value)}
//                   placeholder="Enter Secret Key"
//                 />
//               </Form.Group>
//             )}

//             <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//               <Form.Control
//                 type="text"
//                 name="name"
//                 onChange={getdata}
//                 placeholder="Enter Your Name"
//               />
//             </Form.Group>

//             <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//               <Form.Control
//                 type="email"
//                 name="email"
//                 onChange={getdata}
//                 placeholder="Enter email"
//               />
//             </Form.Group>

//             <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//               <Form.Control onChange={getdata} name="date" type="date" />
//             </Form.Group>

//             <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
//               <Form.Control
//                 type="password"
//                 name="password"
//                 onChange={getdata}
//                 placeholder="Password"
//               />
//             </Form.Group>

//             <Button
//               variant="primary"
//               className="col-lg-6"
//               onClick={addData}
//               style={{ background: 'rgb(67, 185, 127)' }}
//               type="submit"
//             >
//               Submit
//             </Button>
//           </div>
//           <SIgn_img />
//         </section>
//         <ToastContainer />
//       </div>
//     </>
//   );
// };

// export default Register;
// Register.js
// Register.js
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SIgn_img from './SIgn_img';

const Register = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: '',
    email: '',
    date: '',
    password: '',
    userType: 'user', // Default user type
  });

  const [secretKey, setSecretKey] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const getdata = (e) => {
    const { value, name } = e.target;
    if (name === 'userType') {
      if (value === 'Admin') {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }
    setInpval({
      ...inpval,
      [name]: value,
    });
  };

  const addData = (e) => {
    e.preventDefault();

    if (isAdmin && secretKey !== 'AyanT') {
      toast.error('Invalid Admin Secret Key', {
        position: 'top-center',
      });
      return;
    }

    const { name, email, date, password, userType } = inpval;

    if (!name || !email || !date || !password || !userType) {
      toast.error('All fields are required!', {
        position: 'top-center',
      });
    } else if (!email.includes('@')) {
      toast.error('Please enter a valid email address', {
        position: 'top-center',
      });
    } else if (password.length < 5) {
      toast.error('Password must be at least 5 characters long', {
        position: 'top-center',
      });
    } else {
      // Generate a unique ID number for each user
      const userId = Date.now(); // You can use a more robust ID generation method

      // Retrieve existing data from localStorage
      const existingData = JSON.parse(localStorage.getItem('useryoutube')) || [];

      // Combine the existing data with the new user's data
      const newData = [...existingData, { id: userId, ...inpval }];

      // Store the combined data back in localStorage
      localStorage.setItem('useryoutube', JSON.stringify(newData));

      console.log('Data added successfully');
      history('/login');
    }
  };

  return (
    <>
    <br />
          <br />
          <br />
          <br />
          
         
          
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: '100%' }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <div>
              Register AS
              <input
                type="radio"
                name="userType"
                value="user"
                onChange={getdata}
                checked={!isAdmin}
              />
              user
              <input
                type="radio"
                name="userType"
                value="Admin"
                onChange={getdata}
                checked={isAdmin}
              />
              Admin
            </div>

            {isAdmin && (
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="secretKey"
                  onChange={(e) => setSecretKey(e.target.value)}
                  placeholder="Enter Secret Key"
                />
              </Form.Group>
            )}

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="name"
                onChange={getdata}
                placeholder="Enter Your Name"
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                onChange={getdata}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control onChange={getdata} name="date" type="date" />
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
            <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
          </div>
          <SIgn_img />
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Register;
