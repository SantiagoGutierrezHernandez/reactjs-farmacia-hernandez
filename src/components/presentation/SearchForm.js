import { fire } from "../../utils/EventManager"
const SearchForm = ()=>{
    return (
    <div className="light-background d-flex flex-wrap justify-content-center align-items-center" id="filter-form">
        <div className="d-flex flex-column justify-content-center align-items-center">
            <label className="form-label" htmlFor="text-input">Busqueda: </label>
            <input className="form-control fit" type="text" name="filter-text" id="filter-text" onSubmit={(e)=>{e.preventDefault()}}/>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center">
            <label className="form-label" htmlFor="filter-tags">Etiquetas: </label>
            <select className="form-select fit" name="filter-tags" id="filter-tags" aria-label="Default select"  onSubmit={(e)=>{e.preventDefault()}}>Etiquetas:
                <option value="Todos">Todos</option>
                <option value="Crema">Crema</option>
                <option value="Económico">Económico</option>
                <option value="Preparado">Preparado</option>
            </select>
        </div>

        <button className="button-dark" id="filter-submit" onClick={()=>{fire("onFilter", null)}}>Buscar</button>
    </div>
    )
}

export default SearchForm