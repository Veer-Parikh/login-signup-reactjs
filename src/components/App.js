import { Container } from 'react-bootstrap';
import '../App.css';
import Signup from './Signup';
import Dashboard from './Dashboard';
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div style={{ backgroundColor: '#393E46', minHeight: '100vh' }}>
      <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
        <div className='w-100' style={{ maxWidth: '400px', boxShadow: 'none' }}>
          <Router>
            <AuthProvider>
              <Routes>
                <Route exact path="/" element={<Dashboard/>}/>
                <Route path='/signup' element={<Signup/>}/>
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </div>
  );
}

export default App;