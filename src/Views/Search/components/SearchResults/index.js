import React from 'react'
import SearchResultsItem from './SearchResultsItem.js/index.js'

export default function SearchResults({results, searching}) {
    return (
        <div style = {{
            width:"100%",
            padding:"0rem 2rem 0rem 2 rem"}}>
            {results?.lenght && <p>No existen Resultados</p>}
            {results?.map((value)=>
                <SearchResultsItem key = {value.id} name = {value.name} email = {value.email}/>
            )}
        </div>
    )
}
