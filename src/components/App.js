import { Container } from 'react-bootstrap';
import '../App.css';
import Signup from './Signup';
import Login from './Login.js'
import Dashboard from './Dashboard';
import ForgotPassword from './ForgotPassword.js';
import { AuthProvider} from '../context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div style={{ backgroundColor: '#393E46', minHeight: '100vh' }}>
      <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
        <div className='w-100' style={{ maxWidth: '400px', boxShadow: 'none' }}>
          <Router>
            <AuthProvider>
              <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </div>
  );
}

export default App;
