import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Buscador.css";

const Buscador = ({ dataFilter, setDataFilter }) => {
  const inputHandler = (e) => {
    const searchWord = e.target.value.toLowerCase();
    setDataFilter(searchWord);
  };
  return (
    <>
      <h2>Listado de colaboradores</h2>
      <section className="buscador col-12 col-md-6">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          name="buscador"
          id="buscador"
          placeholder="Busca un usuario"
          className="form-control mb-3"
          onChange={inputHandler}
          value={dataFilter}
        />
      </section>
    </>
  );
};
export default Buscador;
