const Buscador = ({ searchData, setDataSearch }) => {
  const inputHandler = (e) => {
    const searchWord = e.target.value.toLowerCase()
    console.log(searchWord)
    console.log(setDataSearch)

    const output = searchData.filter(
      (usuario) =>
        usuario.nombre.toLowerCase().includes(searchWord) ||
        usuario.correo.toLowerCase().includes(searchWord) ||
        usuario.edad.toLowerCase().includes(searchWord) ||
        usuario.cargo.toLowerCase().includes(searchWord) ||
        usuario.telefono.toLowerCase().includes(searchWord)
    )
    console.log(output)
    setDataSearch(output)
  }

  return (
    <section className='buscador col-12 col-md-6'>
      <input
        type='text'
        name='buscador'
        id='buscador'
        placeholder='Busca un usuario'
        className='form-control mb-3'
        onChange={inputHandler}
      />
    </section>
  )
}
export default Buscador
