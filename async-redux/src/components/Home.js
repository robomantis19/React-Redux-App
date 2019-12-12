import React from 'react'; 
import { connect } from 'react-redux';
import { fetchAnime } from '../actions'



const Home = (props) => { 


    return (
        <div>
            <h1>
            Most Active Stocks Today!
            </h1>
            <button onClick={props.fetchAnime}>Get Stock Data</button>
            {/* {console.log("Home props", props.anime)} */}
            <div>
                {props.anime != null ? props.anime.map((stock , index)=> { 
                    return (
                        <div key={index}>
                            
                            <h2>{stock.ticker}</h2>
                            <p>{stock.companyName}</p>
                            <p>{stock.changes}</p>
                            <p>{stock.price}</p>
                        </div>
                    )       
                }): "...loading"}
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => { 
    return {
        anime: state.anime, 
        fetch: state.fetch, 
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { fetchAnime }
)(Home);