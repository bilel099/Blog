import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase'; // Import the auth instance from firebase.js

function Login() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between sign-up and sign-in

  // Function to handle user login or sign-up
  const handleAuth = (event) => {
    event.preventDefault();

    if (isSignUp) {
      // Sign-up logic
      createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then(() => {
          navigate('/'); // Redirect to home after successful sign-up
        })
        .catch((error) => alert(error.message)); // Handle sign-up errors
    } else {
      // Sign-in logic
      signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then(() => {
          navigate('/'); // Redirect to home after successful sign-in
        })
        .catch((error) => alert(error.message)); // Handle sign-in errors
    }
  };

  return (
    <div className="Login">
      <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
      <form onSubmit={handleAuth}>
        <label>Email</label>
        <input
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          required
        />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
      </form>

      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
      </button>
    </div>
  );
}

export default Login;
