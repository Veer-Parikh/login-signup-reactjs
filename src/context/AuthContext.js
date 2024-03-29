import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword,sendPasswordResetEmail } from 'firebase/auth';
import { useEffect, useState, createContext, useContext } from 'react';
import { app } from '../firebase'; // Assuming 'app' is your Firebase app

const auth = getAuth(app);

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setCurrentUser(user);
    } catch (error) {
      console.error('Error creating user:', error.message);
      throw error; 
    }
  };

  const login = async (email,password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Error signing in:', error.message);
      throw error;
    }
  }

  const logout = async () => {
    auth.signOut()
  }

  function reset(email) {
    return sendPasswordResetEmail(email)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    reset
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
