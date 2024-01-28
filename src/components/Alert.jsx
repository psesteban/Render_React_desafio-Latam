import Alert from 'react-bootstrap/Alert'

const Alerta = ({mensaje, color }) => {
  return (
    <>
    <Alert variant={color}>{mensaje}</Alert>
    </>
  )
}

export default Alerta
