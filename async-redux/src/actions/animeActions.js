import axios from 'axios'; 

export const FETCH_START= 'FETCH_SUCCESS'; 
export const STOCK_SUCCESS = 'STOCK_SUCCESS'

export const fetchAnime = () => (dispatch) => { 
    dispatch({ type: FETCH_START});
    axios.get('https://financialmodelingprep.com/api/v3/stock/actives')
    .then(res => { 
        console.log('response', res.data.mostActiveStock); 
        dispatch({ type: STOCK_SUCCESS, payload: res.data.mostActiveStock })

    }).catch(err => { 
        console.log(err)
    })
}