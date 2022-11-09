import React from "react";
import "./Contact.modules.css";

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


export function validate(inputs) {
  let errors = {};
  if (!inputs.name) errors.name = "Se requiere un nombre";
  if (!regexEmail.test(inputs.email))
    errors.email = "Debe ser un correo electrónico";
  if (inputs.phone <= 0) errors.phone = "Sólo números positivos";
  if (!inputs.subject) errors.subject = "Se requiere un asunto";
  if (!inputs.message) errors.message = "Se requiere un mensaje";

  return errors;
}

export default function Contact() {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    phone: 0,
    subject: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...inputs,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault(); //se usa cuando el envento es un submit
    
    if(Object.keys(errors).length) alert("Debes corregir los errores");
      else{
        alert("Datos completos")
        setInputs({
          name: "",
          email: "",
          phone: 0,
          subject: "",
          message: "",
        });
      }
        setErrors({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre:</label>
        <input
          className={errors.name && "warning"}
          onChange={handleChange}
          value={inputs.name}
          type="text"
          name="name"
          placeholder="Escribe tu nombre..."
        />
        <p className="danger">{errors.name}</p>

        <label htmlFor="name">Correo Electrónico:</label>
        <input
          className={errors.email && "warning"}
          onChange={handleChange}
          value={inputs.email}
          type="text"
          name="email"
          placeholder="Escribe tu email..."
        />
        <p className="danger">{errors.email}</p>

        <label htmlFor="name">Teléfono:</label>
        <input
          className={errors.phone && "warning"}
          onChange={handleChange}
          value={inputs.phone}
          type="number"
          name="phone"
          placeholder="Escribe un teléfono..."
        />
        <p className="danger">{errors.phone}</p>

        <label htmlFor="name">Asunto:</label>
        <input
          className={errors.subject && "warning"}
          onChange={handleChange}
          value={inputs.subject}
          type="text"
          name="subject"
          placeholder="Escribe el asunto..."
        />
        <p className="danger">{errors.subject}</p>

        <label htmlFor="name">Mensaje:</label>
        <textarea
          className={errors.message && "warning"}
          onChange={handleChange}
          value={inputs.message}
          type="text"
          name="message"
          placeholder="Escribe tu mensaje..."
        />
        <p className="danger">{errors.message}</p>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
