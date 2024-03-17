import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [visitedFlags,setVisitedFlags]=useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handelVisitedCountry = countries => {
        const newVisitedCountry=[...visitedCountry,countries];
        setVisitedCountry(newVisitedCountry)
        console.log('visited country added')
    }

    const handelVisitedFlags=(flags)=>{
        const newSetVisitedFlags=[...visitedFlags,flags];
        setVisitedFlags(newSetVisitedFlags)
    }
    return (

        <div>
            <h1>Countries</h1>
            <div>
                <h2>Visited Country:{visitedCountry.length}</h2>
                <ul>
                    {
                        visitedCountry.map(country=><li key={country}>{country.name.common}</li>)
                        
                    }
                </ul>
            </div>
            <div className="visited-flags">
                    {
                        visitedFlags.map((flag,idx)=><img key={idx} src={flag}></img>)
                    }
            </div>
            <div className="country-container">
                {
                    countries.map(country =>
                        <Country

                            key={country.cca3}
                            country={country}
                            handelVisitedCountry={handelVisitedCountry}
                            handelVisitedFlags={handelVisitedFlags}
                        ></Country>)
                }
            </div>
        </div>


    );
};

export default Countries;