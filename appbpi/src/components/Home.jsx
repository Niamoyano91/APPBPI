import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
    // se guarda el objeto//
    const [price, setPrice] = useState([])

    //se ejecuta la funcion cada vez que cambia un valor del objeto//
    useEffect(() => {
        getData()
    });

    //obtener datos desde la api//
    const getData = async () => {
        const data = await fetch('https://api.coindesk.com/v1/bpi/currentprice/USD.json')
        const arrayData = await data.json()
        const Pricebpi = arrayData.bpi.USD
        setPrice(Pricebpi)
    };

    return (
        <div className='containerHome'>
            <h1 className='priceHome'>${price.rate} USD</h1>
            <h2 className='textHome'>Valor actual Bitcoin</h2>
        </div>
    )
}

export default Home
