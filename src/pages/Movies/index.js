import React, { useEffect, useState } from 'react'
import { Header, Movie } from '../../components';
import './movies.scss'

import api from '../../services/api'

function Movies() {
    const [movies, setMovies] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([])

    useEffect(() => {
        async function loadData() {
            const { data: { docs } } = await api.get('movie')

            setMovies(docs)
            setFilteredMovies(docs)
        }

        loadData()
    }, [])

    function onInputChange(event) {
        const newMovies = movies.filter(movie => movie.name.toLowerCase().includes(event.target.value.toLowerCase()))
        setFilteredMovies(newMovies)
    }
    return (
        <div className="main-div">
            <Header />
            <div className="wrapper-div">
                <h1 className="main-text">Lord of the Rings Movies</h1>
                <div className="sub-div">
                    <div>
                        <p className="text-top">Ave. movie runtime: xxx min</p>
                        <p className="text-top">Ave. movie runtime: xxx min</p>
                    </div>
                    <div>
                        <input placeholder="Finter movies by name" onChange={onInputChange}></input>
                        {/* <select></select> */}
                    </div>
                </div>
            </div>
            <div className="movies-div">
                {filteredMovies && filteredMovies.map(movie => (
                    <Movie movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default Movies
