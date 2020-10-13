import React, { useState, useEffect } from 'react';
import { LineChart } from 'react-chartkick';
import 'chart.js';
import './Graphic.css';


const Graphic = () => {

    // se guarda el objeto//
    const [dataGraphic, setDataGraphic] = useState()

    //se ejecuta la funcion cada vez que cambia un valor del objeto//
    useEffect(() => {
        getDataGraphic()
    },[]);

    //obtener datos desde la api//
    const getDataGraphic = async () => {
        const data = await fetch('https://api.coindesk.com/v1/bpi/historical/close.json?start=2020-08-09&end=2020-09-09')
        const arrayData = await data.json()
        const valuesGraphic = arrayData.bpi
        setDataGraphic(valuesGraphic)
    };

    return (
        <div className='containerGraphic'>
            <h3 className='titleGraphic'>Gráfico valor Bitcoin entre el 9 de Agosto al 9 de Septiembre del 2020</h3>
            <div className='graphic'>
            <LineChart  
            colors={["#2BD9B9", "#2BD9B9"]} 
            id="users-chart" width="700px" height="500px" 
            min={10000} max={12500} 
            xtitle="Fecha" 
            ytitle="Valor BPI"
            download={true} 
            data={dataGraphic} />
            </div>
        </div>
    )
}

export default Graphic
