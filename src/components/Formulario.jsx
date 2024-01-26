import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alerta from './Alert'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Formulario.css'

const Formulario = ({ ingresarColaborador, data, mostarNuevoColab }) => {
  const objetoUsuario = {
    id: (parseInt(data.length, 10) + 1).toString(),
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
  }
  const [user, setUser] = useState(objetoUsuario)
  const [mensajeDeAdvertencia, setMensajeDeAdvertencia] = useState('')
  const [estilo, setEstilo] = useState('')

  const validarDatos = () => {
    if (Object.values(user).some((value) => value === '')) {
      setMensajeDeAdvertencia('Todos los campos son obligatorios')
      setEstilo('warning')
      return false
    }
    return true
  }

  const validarEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValid = emailRegex.test(user.correo)

    if (!isValid) {
      setMensajeDeAdvertencia('Introduce un mail válido')
      setEstilo('danger')
      return false
    }
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(validarDatos(), validarEmail())
    const datosValidos = validarDatos() && validarEmail()

    if (datosValidos) {
      setEstilo('success')
      setMensajeDeAdvertencia('Registro realizado con éxito')
      ingresarColaborador([...data, user])
      setUser(objetoUsuario)
    } else {
      setEstilo('danger')
    }
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  return (
    <Form className='formulario border border-2 rounded p-2 m-1 pt-4' onSubmit={handleSubmit}>
      {['Nombre', 'Correo', 'Edad', 'Cargo', 'Telefono'].map((campo) => (
        <Form.Group
          key={campo}
          className='mb-3'
          controlId={`formBasic${campo}`}
        >
          <Form.Control
            type={campo.includes('Correo') ? 'email' : 'text'}
            placeholder={campo + ' del colaborador'}
            name={campo.toLowerCase()}
            onChange={handleChange}
            value={user[campo.toLowerCase()]}
          />
        </Form.Group>
      ))}

      <Button variant='primary' type='submit'>
        Agregar colaborador
      </Button>
      <Alerta color={estilo} text={mensajeDeAdvertencia} />
    </Form>
  )
}

export default Formulario
