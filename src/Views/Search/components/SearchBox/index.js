import React,{useState} from 'react'
import './styles.css'

export default function SearchBox({onSearch, onClose, searching}) {
    const [search, setsearch] = useState("")

    const handleTextArea = ()=>{
        setsearch("")
        onClose();
    }
    return(
        <>
            <div className = "search-box">
                <h2 className = "search-box-title">Buscador </h2>
                <div className = "buttons">
                    <label>
                        <input
                         value = {search}
                         onChange = {(e)=>setsearch(e.target.value)}
                         className = "search-box-input"
                         />
                    </label>
                    <button onClick={()=>onSearch(search)} disabled={!search.length}>
                        Buscar
                    </button>
                    {searching && <button onClick={handleTextArea}  disabled={!search.length}>
                        Cerrar
                    </button>}
                </div>
            </div>

        </>
    );
}
