import { useState } from 'react';
import './Country.css';
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({ country, handelVisitedCountry, handelVisitedFlags }) => {
    console.log(country);
    const { name, flags, population, area } = country;
    const [visited, setVisited] = useState(false);
    const handelVisited = () => {
        setVisited(!visited);
    }

    const passWithParams = () => {
        handelVisitedCountry(country)
    }

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h2 style={{ color: visited ? 'white' : 'black' }}>Name:{name.common}  </h2>
            <img src={flags.png} alt="" />
            <p>Population: {population} </p>
            <p>Area: {area}</p>
            <button onClick={passWithParams}>Mark Visited</button>
            <br />
            <button onClick={() => handelVisitedFlags(country.flags.png)}>Visited Flag</button>
            <br />
            <button onClick={handelVisited}>{visited ? "Visited" : "going"}</button>
            {visited ? 'visited this country' : 'i went to visit'}
            <hr />
            <CountryDetail
                country={country}
                handelVisitedCountry={handelVisitedCountry}
                handelVisitedFlags={handelVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Country;