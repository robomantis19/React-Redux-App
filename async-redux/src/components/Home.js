import React from 'react'; 
import { connect } from 'react-redux';
import { fetchAnime } from '../actions'
import Loader from 'react-loader-spinner'; 
import styled, { ThemeProvider } from 'styled-components';

const Justify = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 100px;
    margin-right: 100px;
    
`
const Align = styled.p`
   width: 100px;

`
const Btn = styled.button`
    font-size: 1em; 
    margin: 1em; 
    padding: 0.25em 1em; 
    border-radius: 3px; 

    color: royalblue; 
    border: 2px solid royalblue;


`
const GreenBtn = styled(Btn)`
    color: lime;
    border: 2px solid lime;
`

    // theme: {
    //     main: 'mediumseagrean'
    // }

// const theme = {
//     main: "royalblue"
// }
const Home = (props) => { 


    return (
        <div>
            <h1>
            Most Active Stocks Today!
            </h1>

            {props.fetch ? <GreenBtn onClick={props.fetchAnime}>Get Stock Data</GreenBtn>
               : <Btn onClick={props.fetchAnime}>Get Stock Data</Btn>
              }
            {/* {console.log("Home props", props.anime)} */}
            <div>
                {!props.fetch && props.anime != null ? props.anime.map((stock , index)=> { 
                    return (
                        <Justify key={index}>
                            
                            <h2 style={{width: `100px`}}>{stock.ticker}</h2>
                            <Align>{stock.changes}</Align>
                            <p style={{width: `100px`}}>{stock.price}</p>
                            <p style={{width: `100px`}}>{stock.companyName}</p>
                        </Justify>
                    )       
                }): null}
                {props.fetch &&  <Loader type="Puff" color="#00BFFF" height={100} width={100} />}
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