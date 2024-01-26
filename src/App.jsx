import BaseColaboradores from './components/Base.js'
import Buscador from './components/Buscador.jsx'
import Formulario from './components/Formulario.jsx'
import Listado from './components/Listado.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useState } from 'react'

const App = () => {
  const [data, setData] = useState(BaseColaboradores)
  const [dataFilter, setDataFilter] = useState(data)
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
