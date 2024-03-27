import React from 'react'
import { Card,Form,Button } from 'react-bootstrap'
export default function Signup() {
  return (
    <>
      <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>SignUp</h2>
        </Card.Body>
        <Form>
            <Form.Group id='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' ref={emailRef} required></Form.Control>
            </Form.Group>
            <Form.Group id='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' ref={passwordRef} required></Form.Control>
            </Form.Group>
            <Form.Group id='password-confirm'>
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type='password' ref={passwordConfirmRef} required></Form.Control>
            </Form.Group>
            <Button className='w-100' type='submit'>SignUp</Button>
        </Form>
      </Card>
      <div className='w-100 text-center mt-2'>
        already have an account? Login
      </div>
    </>
  )
}
