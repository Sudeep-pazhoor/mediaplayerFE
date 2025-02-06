import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { getExistingUserApi, userRegisterApi, userLoginApi} from '../Services/allApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Log() {
  const [authStatus, setAuthStatus] = useState(false)
  const [user, setUser] = useState({
    email: "", username: "", password: ""
  })

  const nav=useNavigate()

  const changeStatus = () => {
    setAuthStatus(
      !authStatus)
  }

  const handleRegister = async () => {
    const { email, username, password } = user;
    console.log(user);
    if (!email || !username || !password) {
      toast.warning("Enter Valid Input !!");
    } else {
      const result = await getExistingUserApi(email);
      console.log(result);
      if (result.data.length > 0) {
        toast.info("User Already Exists !!");
      } else {
        const result = await userRegisterApi(user)
        if (result.status == 201) {
          toast.success("User Registration Successfull")
          setUser({
            email: "", username: "", password: ""
          })
          changeStatus()
        }
        else {
          toast.error("Registration Failed !")
          setUser({
            email: "", username: "", password: ""
          })
        }
      }
    }
  };

  const handleLogin=async()=>{
    const {email,password}=user
    if(!email || !password){
      toast.warning("Enter Valid Inputs")
    }
    else{
      const result= await userLoginApi(email,password)
      if(result.status==200){
        if(result.data.length>0){
          toast.success("Login Success")
          nav('/dash')
        }
        else{
          toast.error("Login Failed")
        }
      }else{
        toast.warning("Something Went Wrong")
      }
    }
  }

  return (
    <>
      <div className='container-fluid d-flex justify-content-center align-items-center' style={{ height: '95vh', backgroundColor: 'black' }}>
        <div className='w-50 border shadow  border-3 border-dark p-3 text-success' style={{ backgroundColor: 'black' }} >
          <Row>
            <Col>
              <img src="https://quantnex.com/wp-content/uploads/2022/12/101492-blue-security.gif" className='w-100 h-100' alt="" />
            </Col>
            <Col>
              {
                authStatus ?
                  <h3>Register</h3>
                  :
                  <h3>Login</h3>
              }

              <div className="my-4">
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                  <Form.Control type="email" placeholder="name@example.com" onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                </FloatingLabel>

                {authStatus && (
                  <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                    <Form.Control type="text" placeholder="Username" onChange={(e) => { setUser({ ...user, username: e.target.value }) }} />
                  </FloatingLabel>
                )}

                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Password" onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
                </FloatingLabel>
              </div>


              <div className="d-flex justify-content-between">
                {authStatus ? (
                  <button className="btn text-light" style={{ backgroundColor: "green" }} onClick={handleRegister}>
                    Register
                  </button>
                ) : (
                  <button className="btn text-light" style={{ backgroundColor: "#00246B" }} onClick={handleLogin}>
                    Login
                  </button>
                )}
                {authStatus ? (
                  <button className="btn btn-link" onClick={changeStatus}>Already a User? </button>
                ) : (
                  <button className="btn btn-link" onClick={changeStatus}>New User?</button>
                )}
              </div>

            </Col>

          </Row>
        </div>
      </div >
    </>
  )
}

export default Log