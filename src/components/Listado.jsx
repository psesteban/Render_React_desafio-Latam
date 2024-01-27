import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Table } from 'react-bootstrap'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Listado = ({ colaboradores, sacarId }) => {
  const usuarios = colaboradores.map((usuario)=>(
    <tr className="align-middle" key={usuario.id}>
          <td>{usuario.id}</td>
          <td>{usuario.nombre}</td>
          <td>{usuario.correo}</td>
          <td>{usuario.edad}</td>
          <td>{usuario.cargo}</td>
          <td>{usuario.telefono}</td>
          <td><button className="btn btn-dark" onClick={()=> {sacarId(usuario.id)}}><FontAwesomeIcon icon={faTrash} /></button></td>
        </tr>
  ))
  return (
    <>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {usuarios}
      </tbody>
    </Table>
    </>
  )
}

export default Listado
