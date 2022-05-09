import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './calendario.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';

//https://www.npmjs.com/package/react-datepicker Librería para el calendario
const Calendario = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <div className='calendario'>
      <Sidebar />
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="top">
            {/* <div className="left">
              <p>Seleccione una fecha</p>
              <div className='fecha'>
                <label name="fecha">
                  Fecha:
                </label>
                <DatePicker
                  selectsRange={true}
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(update) => {
                    setDateRange(update);
                  }}
                  isClearable={true}
                />
              </div> 

            </div>*/}

            <div className="right">

              <p>Seleccione un curso</p>
              <div>
                <label name="fecha">
                  Curso:
                </label>
                <input type="text" placeholder='Ingresar curso' />
              </div>

            </div>
          </div>
          <div className="bottom">
            <Link to="resultado-calendario">
            <button>buscar</button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Calendario