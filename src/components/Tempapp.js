import React, { useEffect, useState } from "react";
import './CSS/style.css';

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Delhi");
    // https://api.openweathermap.org/data/2.5/weather?q=Moradabad&appid=fa3684081c887ecaf37a75d99585cdd3

    useEffect(()=>{
        const fetchApi = async () => {

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=fa3684081c887ecaf37a75d99585cdd3`;
            const res = await fetch(url);
            const data = await res.json();
            
            if (data.cod === 200) {
                setCity(data);
            } else {
                setCity(null); // No data found, reset city state
            }         
            
            
        }




        fetchApi();
    },[search])

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input 
                    type="search" 
                    className="inputFeild" 
                    onChange={(event)=>{
                        setSearch(event.target.value)
                    }} 
                    placeholder='Search' 

                    />

                </div>
                {city ? (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i>
                                {city.name}
                            </h2>
                            {city.main ? (
                                <>
                                <h1 className="temp">{city.main.temp}</h1>
                                <h3 className="tempmin_max">Min : {city.main.temp_min} || Max : {city.main.temp_max}</h3>
                                </>
                            ) : (
                                <h2>No Temperature Data Available</h2>
                            )}
                            
                        </div>
                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </div>
                ) : (
                    <h1 className="noData">No Data Found</h1>
                )}
                
            </div>
        </>
    )
}

export default Tempapp;