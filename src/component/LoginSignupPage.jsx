import React, { useState } from 'react';

const LoginSignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login or sign up logic here
    if (isLogin) {
      // Login logic
      console.log('Logging in with:', email, password);
    } else {
      // Sign up logic
      console.log('Signing up with:', email, password);
    }
  };

  return (
    <div className='container'>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form className="form-control"onSubmit={handleSubmit}>
      <div className="col-md-6">

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
           <div className="col-md-6">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </div>
       <div className="col-md-6">
        <button className="btn btn-success"type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </div>
      </form>
      <p>{isLogin ? 'New to the site? ' : 'Already have an account? '}<span onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Sign up' : 'Login'}</span></p>
    </div>
  );
};

export default LoginSignupPage;
