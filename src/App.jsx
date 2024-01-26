import React from 'react'
import BaseColaboradores from './components/Base.js'
import Buscador from './Buscador.jsx'
import Listado from './components/Listado.jsx'

export const App = () => {

  const [data, setData] = useState(BaseColaboradores)
const [dataFilter, setDataFilter] = useState(data)
console.log(data)

return (
    <>
    <h1 className='my-4'>
        {''} Lista de usuarios

    </h1>
    <Buscador
    data={data}
    setDataFilter={setDataFilter}
    />
    <div className='row row-cols-2 justify-content-end'>
<Listado 
data={data}/>
<Formulario className="formulario" />
        

    </div>


    </>
)
}

export default App
