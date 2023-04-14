// pages/contact.js

import { useState } from 'react'
import axios from 'axios'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/contact', formData)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" onChange={handleChange} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" onChange={handleChange} />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  )
}
