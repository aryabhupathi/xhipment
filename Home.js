import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const navigate = useNavigate();

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Email</h2>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
        <h2>Password</h2>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
        <br></br>
        <br></br>
        <button onClick={() => navigate("/login")}>Login</button>
      </form>
    </>
  );
};

export default Home;