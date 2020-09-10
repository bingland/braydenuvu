import React from 'react'
import './Search.css'

function Search(props) {
    return (
        <div className="search">
            <form className="searchForm" onSubmit={props.submit}>
                <input type="text" placeholder="Type a word..." onChange={props.changed} value={props.value}></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default Search
