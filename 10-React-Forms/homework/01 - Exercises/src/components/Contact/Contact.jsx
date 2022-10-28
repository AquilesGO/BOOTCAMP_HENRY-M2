<<<<<<< HEAD
import React from 'react'
=======
import React, { useState } from 'react'
>>>>>>> refactor/HW-integration_solved
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

<<<<<<< HEAD
export default function Contact () {
  return <div>Crear Formulario</div>
=======
export function validate (inputs) {
  const error = {}
  if (!inputs.name) {
    error.name = 'Se requiere un nombre'
  } else if (!regexEmail.test(inputs.email)) {
    error.email = 'Debe ser un correo electrónico'
  } else if (inputs.phone < 0) {
    error.phone = 'Sólo números positivos'
  } else if (!inputs.subject) {
    error.subject = 'Se requiere un asunto'
  } else if (!inputs.message) {
    error.message = 'Se requiere un mensaje'
  }
  return error
}

export default function Contact () {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: 0,
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
    setErrors(
      validate({
        ...inputs,
        [e.target.name]: e.target.value
      })
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const aux = Object.keys(errors)
    if (aux.length === 0) {
      setInputs({
        name: '',
        email: '',
        phone: 0,
        subject: '',
        message: ''
      })
      setErrors({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      return window.alert('Datos completos')
    } else {
      return window.alert('Debe llenar todos los campos correctamente')
    }
  }

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e)
      }}
    >
      <label>Nombre:</label>
      <input
        type='text'
        placeholder='Escribe tu nombre...'
        name='name'
        value={inputs.name}
        onChange={(e) => handleChange(e)}
        className={errors.name && 'warning'}
      />
      <p className='danger'>{errors.name}</p>
      <label>Correo Electrónico:</label>
      <input
        type='text'
        placeholder='Escribe tu email...'
        name='email'
        value={inputs.email}
        onChange={(e) => handleChange(e)}
        className={errors.email && 'warning'}
      />
      <p className='danger'>{errors.email}</p>
      <label>Teléfono:</label>
      <input
        type='number'
        placeholder='Escribe un teléfono...'
        name='phone'
        value={inputs.phone}
        onChange={(e) => handleChange(e)}
        className={errors.phone && 'warning'}
      />
      <p className='danger'>{errors.phone}</p>
      <label>Asunto:</label>
      <input
        type='text'
        placeholder='Escribe el asunto...'
        name='subject'
        value={inputs.subject}
        onChange={(e) => handleChange(e)}
        className={errors.subject && 'warning'}
      />
      <p className='danger'>{errors.subject}</p>
      <label>Mensaje:</label>
      <input
        type='text'
        placeholder='Escribe tu mensaje...'
        name='message'
        value={inputs.message}
        onChange={(e) => handleChange(e)}
        className={errors.message && 'warning'}
      />
      <p className='danger'>{errors.message}</p>
      <button type='submit'>Enviar</button>
    </form>
  )
>>>>>>> refactor/HW-integration_solved
}
