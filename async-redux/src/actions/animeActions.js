import axios from 'axios'; 

export const FETCH_START= 'FETCH_SUCCESS'; 


export const fetchAnime = () => { 
    dispatch({ type: FETCH_START});
}