import React from 'react'
import './movie.scss'

export function Movie({ movie }) {

    return (
        <div className="main-div-movie">
            <div className="top-img"></div>
            <div className="wrapper-movie">
                <h2 className="movie-name">{movie.name}</h2>
                <p>{movie.runtimeInMinutes} min</p>
                <p>{movie.academyAwardWins}</p>
                <div className="movie-div">
                    <p>Budget</p>
                    <p>Revenue</p>
                </div>
                <div className="movie-div">
                    <p>{movie.budgetInMillions}</p>
                    <p>{movie.boxOfficeRevenueInMillions}</p>
                </div>
            </div>
        </div>
    )
}

