import BaseColaboradores from './Base.js'
import Buscador from './components/Buscador.jsx'
import Formulario from './components/Formulario.jsx'
import Listado from './components/Listado.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useState } from 'react'

const App = () => {
  const [data, setData] = useState(BaseColaboradores)
  const [dataFilter, setDataFilter] = useState('')
  const [alert, setAlert]=useState({
    msg:'',
    color:''
  })
  const nuevosColaboradoresConId = (nuevoColaboradorConId)=>{
    const ultimoValor = data[data.length-1]
    const colaboradorConId = {...nuevoColaboradorConId, id: ultimoValor? Number(ultimoValor.id)+1:1}
    setData([...datos, colaboradorConId])
  }
  const mostrarAlerta = (mensajeAlerta)=>{
    setAlert(mensajeAlerta)
  }
  const sacarId = (idColaborador)=>{
    const newList = data.filter((colaborador)=>colaborador.id != idColaborador)
    setData(newList)
  }
  const filtro = data.filter((colaborador)=>{
    return(
      colaborador.nombre.toLowerCase().includes(dataFilter.toLowerCase()) ||
      colaborador.correo.toLowerCase().includes(dataFilter.toLowerCase()) ||
      colaborador.edad.toLowerCase().includes(dataFilter.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(dataFilter.toLowerCase()) ||
      colaborador.telefono.toLowerCase().includes(dataFilter.toLowerCase())
    )
  })

  return (
    <>
      <h1>Lista de usuarios</h1>
      <Buscador searchData={data} setDataSearch={setDataFilter} />
      <main className='principal'>
        <Listado className='lista ' colaboradores={dataFilter} />
        <Formulario
          className='formulario'
          ingresarColaborador={setData}
          data={data}
        />
      </main>
    </>
  )
}

export default App
