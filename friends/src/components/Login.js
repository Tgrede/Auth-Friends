import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('')
  };

  const login = e => {
       e.preventDefault()
       axios.post('http://localhost:5000/api/login', formData)
       .then((res) => {
          console.log(res)
          localStorage.setItem('token', JSON.stringify(res.data.payload))
          props.history.push('/protected')
       })
       .catch((err) => {
          console.log({err})
          setError(err.response.data.error)
       })

  }

  return (
    <form>
     <label htmlFor='username'>Username:</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <label htmlFor='password'>Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <p>{error}</p>
      <button onClick={login}>Log in</button>
    </form>
  );
}
