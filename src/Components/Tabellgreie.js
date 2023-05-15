import React from "react";
import './Tabellgreie.css';
import '../App.css';

const data = [
    { produsent: "Bjarte Bjartesen", gård: "Hemmelig", sted: "Blokksberg", griser: "23", areal:"2m^2"}
];

function Tabellgreie () {
   return (
      <div className='tabell-container'>
         <table>
            <tr>
                <th>Produsent</th>
                <th>Gård</th>
                <th>Sted</th>
                <th>Griser</th>
                <th>Areal per gris</th>
            </tr>
            {data.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>{val.produsent}</td>
                        <td>{val.gård}</td>
                        <td>{val.sted}</td>
                        <td>{val.griser}</td>
                        <td>{val.areal}</td>
                    </tr>
                )
            })}
         </table>
      </div>
   );
} 

export default Tabellgreie;