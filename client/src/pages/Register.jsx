import React from 'react'
import { Form, Input, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
  const navigate=useNavigate()
  const onfinishHandler=async(values)=>{
    try {
      const res=await axios.post('/api/v1/user/register',values)
      if(res.data.success){
        message.success("Register SuccessFully..")
        navigate('/login')
      }else{
        message.error("Somthing Went wrong")
      }
      
    } catch (error) {
      console.log(error);
      message.error("Somthing went wrongggg")
    }

  }
  return (
    <>
    <div className="form-container flex items-center justify-center h-screen border border-l-amber-500 ">
      
      <Form layout='vertical' onFinish={onfinishHandler} className='border-2 w-96 border-black p-20 rounded'>
      <h1 className='text-3xl text-center'>Register Form</h1>
       <Form.Item label='Name' name='name'>
        <Input type='text' required/>
       </Form.Item>
       <Form.Item label='Email' name='email'>
        <Input type='Email' required/>
       </Form.Item>
       <Form.Item label='Password' name='password'>
        <Input type='password' required/>
       </Form.Item>
       <Link to="/login"><p className='text-blue-500'>Already User login here</p></Link>
       <button className='bg-gray-300 p-2 ' type='submit'>submit</button>
      </Form>
    </div>
    </>
  )
}

export default Register