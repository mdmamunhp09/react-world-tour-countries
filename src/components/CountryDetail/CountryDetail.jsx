import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
        // const {country,handelVisitedCountry,handelVisitedFlags}=props;
        return (
        <div>
            <h5>country:</h5>
            {/* <CountryData
                 country={country}
                  handelVisitedCountry={handelVisitedCountry }
                    handelVisitedFlags={handelVisitedFlags}
             ></CountryData> */}

             <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetail;