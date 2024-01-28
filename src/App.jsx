import BaseColaboradores from './Base.js'
import Buscador from './components/Buscador.jsx'
import Formulario from './components/Formulario.jsx'
import Listado from './components/Listado.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useState } from 'react'
import Alerta from './components/Alert.jsx'

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
    setData([...data, colaboradorConId])
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
    <main className='principal'>
      <section>
      <Buscador searchData={dataFilter} setDataFilter={setDataFilter} />
      <Listado className='lista' colaboradores={filtro} sacarId={sacarId}/>
      </section>
      <aside>
      <Formulario className='formulario' nuevosColaboradores={nuevosColaboradoresConId} mostrarAlerta={mostrarAlerta}/>
      <Alerta mensaje={alert.mensaje} color={alert.color}/>
      </aside>
      </main>
    </>
  )
}

export default App
