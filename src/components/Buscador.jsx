const Buscador = ({data}) => {
const inputHandler = (e) => {
    const searchWord = e.target.value.toLowerCase();
}
const output = data.filter(
    (usuario) => usuario.nombre.toLowerCase().includes(searchWord) 
)

return (
    <section className="buscador col-12 col-md-6">
        <input 
        type="text"
        name="buscador"
        id="buscador"
        placeholder="Busca un usuario"
        className="form-control mb-3"
        onChange={inputHandler}
        />
        </section>
)
}
export default Buscador;

