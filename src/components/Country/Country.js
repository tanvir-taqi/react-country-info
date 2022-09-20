import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,capital,region,area,population,flags} = props.country
    return (
        <div className='country-card'>
            <img src={flags.png} alt="" />
            <p>Name: <b>{name.common}</b></p>
            <p>Capital: <b>{capital}</b></p>
            <p>Population: <b>{population}</b></p>
            <p>Area: <b>{area}</b></p>
            <p>Region: <b>{region}</b></p>
            
        </div>
    );
};

export default Country;