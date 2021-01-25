import React, { useState, useEffect } from 'react';
import './Stats.css';
import axios from "axios";
import StatsRow from './StatsRow';
import { db } from './firebase';

const TOKEN = 'c0411o748v6qfu3ufb30';
const BASE_URL = 'https://finnhub.io/api/v1/quote';

function Stats() {

    const [stockData, setstockData] = useState([]);
    const [myStocks, setMyStocks] = useState([]);

    const getMyStocks = () => { //get stocks from firebaseDB
        db.collection('myStocks')
        .onSnapshot(snapshot => {
            let promises = [];
            let tempData = [];

            snapshot.docs.forEach((doc) => {
                promises.push(getStockData(doc.data().ticker) //get data from API (name of stock is an argument) => get promises and pushing them in the promises array
                    .then(res => {
                        tempData.push({ //pushing objects in array of data
                        id: doc.id, 
                        data: doc.data(),
                        info: res.data //response from getStockData
                    })
                })
            )})
            
            Promise.all(promises).then(()=>{ //wait when all promises is finished
                setMyStocks(tempData);
            })
        })
    };

    const getStockData = (stock) => {
        return axios
          .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
          .catch((error) => {
              console.error("Error", error.message);
          });

    };

    useEffect(() => {
        let tempStocksData = [];
        const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "UBER", "DIS", "SBUX"];
        let promises = [];
        getMyStocks();
        stocksList.map((stock) => {
            promises.push(
                getStockData(stock)
                .then((res) => {
                    tempStocksData.push({
                        name: stock,
                        ...res.data
                    })
                })
            )
        });

        Promise.all(promises).then(() => { //wait when all promises is finished
            setstockData(tempStocksData); 
        })
    }, []);

    return (
        <div className="stats">
            <div className="stats__container">
                <div className="stats__header">
                    <p>Stocks</p>
                </div>
                <div className="stats__content">
                    <div className="stats__rows">
                        {myStocks.map((stock) => (
                            <StatsRow
                                key={stock.data.ticker}
                                name={stock.data.ticker}
                                openPrice={stock.info.o}
                                shares={stock.data.shares}
                                price={stock.info.c}/>
                        ))} 
                    </div>
                </div>
                <div className="stats__header stats__lists">
                    <p>Lists</p>
                </div>
                <div className="stats__content">
                    <div className="stats__rows">
                        {stockData.map((stock) => (
                            <StatsRow
                                key={stock.name}
                                name={stock.name}
                                openPrice={stock.o}
                                price={stock.c}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats;
