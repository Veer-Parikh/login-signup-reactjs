import React,{useState} from 'react'
import { Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


export default function Dashboard() {
  const [error,setError] = useState("")
  const {currentUser,logout} = useAuth()
  const navigate = useNavigate();
  function handleLogout() {
    setError('');
    try{
      logout()
      navigate("/login")
    }catch(err){
      setError("failed to logout")
    }
  }
  return (
    <div style={{color:"whitesmoke"}}>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Profile</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <strong>Email:</strong> {currentUser? currentUser.email:""}
        </Card.Body>
      </Card>
        <div className='w-100 text-center mt-4'>
          <Button variant="link" onClick={handleLogout} style={{textDecoration:"none"}}>Logout</Button>
        </div>
    </div>
  )
}
