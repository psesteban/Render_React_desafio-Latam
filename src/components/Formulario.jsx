import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './Formulario.css'

const Formulario = ({ nuevosColaboradores, mostrarAlerta }) => {
  const [user, setUser]= useState({
    id: '',
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
  })
  //Validando el formulario
  const handleSubmit=(e)=>{
    e.preventDefault()
    const {nombre, correo, edad, cargo, telefono}= user
    const validaUser = !nombre || !correo || !edad || !cargo || !telefono
    if (validaUser){
      mostrarAlerta({
          mensaje:'Debe llenar todos los campos',
          color:'warning'
      })
      return
  }else if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(correo)) {
          mostrarAlerta({
              mensaje:'El correo ingresado no tiene un formato válido',
              color:'danger'
          })
          return
      }else if(!/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(telefono)){
        mostrarAlerta({
          mensaje:'El telefono ingresado no tiene un formato válido',
          color:'danger'
      })
      return
      }
  mostrarAlerta({
      mensaje:'Colaborador ingresado con éxito',
      color:'success'
  })
  nuevosColaboradores(user)
  setUser(
      {
          id: '',
          nombre: '',
          correo: '',
          edad: '',
          cargo: '',
          telefono: ''
      }
  )
  }
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  return (
    <>
    <Form className='formulario border border-2 rounded p-2 m-1 pt-4' onSubmit={handleSubmit}>
    <h2>Agregar colaborador</h2>
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
    </Form>
    </>
  )
}

export default Formulario
