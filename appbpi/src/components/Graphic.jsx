import React, { useState, useEffect } from 'react'
import { LineChart, PieChart } from 'react-chartkick'
import 'chart.js'

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

    console.log(dataGraphic)
    return (
        <div>
            <li></li>
            <LineChart  
            colors={["#b00", "#666"]} 
            id="users-chart" width="700px" height="500px" 
            min={10000} max={12500} 
            xtitle="Fecha [09 de Agosto a 09 de Septiembre del 2020]
            " 
            ytitle="Valor BPI"
            data={dataGraphic} />
        </div>
    )
}

export default Graphic
