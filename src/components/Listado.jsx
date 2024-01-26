import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.min.css'

const Listado = ({ data }) => {
  const usuarios = data.map((usuario) => (
    <ListGroup horizontal key={usuario.nombre}>
      <ListGroup.Item>{usuario.nombre}</ListGroup.Item>
      <ListGroup.Item>{usuario.correo}</ListGroup.Item>
      <ListGroup.Item>{usuario.edad}</ListGroup.Item>
      <ListGroup.Item>{usuario.cargo}</ListGroup.Item>
      <ListGroup.Item>{usuario.telefono}</ListGroup.Item>
    </ListGroup>
  ))

  return <>{usuarios}</>
}

export default Listado
