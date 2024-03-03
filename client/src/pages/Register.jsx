import React from 'react'
import { Form, Input } from 'antd'
import { Link } from 'react-router-dom';

const Register = () => {
  const onfinishHandler=(values)=>{
    console.log(values);

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
       <button className='bg-gray-300 p-2 ' type='submit'><Link >Submit</Link></button>
      </Form>
    </div>
    </>
  )
}

export default Register