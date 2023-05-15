import React from "react";
import { Link } from 'react-router-dom';
import './Barometer.css';




function Barometer () {
    return (
        <div className='barometer'>
            <h1>Livskvalitetsbarometer</h1>
            <p>Barometeret er basert på data innsamlet fra gården, for mer detaljer trykk under:</p>

            <div>
                <Link to='/Statistikk'>
                   <buttonStat>TRYKK HER</buttonStat>
                </Link>
            </div>
        </div>
    );
}

export default Barometer;