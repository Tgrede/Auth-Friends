import React, {useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';

function AddFriend() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: null
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('')
  };

  const addFriend = (e) => {
    axiosWithAuth()
    .post('/api/friends', formData)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  return (
    <form>
      <label htmlFor='name'>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor='email'>E-mail:</label>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor='age'>Age:</label>
      <input
        type="text"
        name="age"
        value={formData.age}
        onChange={handleChange}
      />
      <p>{error}</p>
      <button onClick={addFriend}>Add Friend</button>
    </form>
  )
}

export default AddFriend
