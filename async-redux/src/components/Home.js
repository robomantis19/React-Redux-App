import React from 'react'; 
import { connect } from 'react-redux';



const Home = (props) => { 


    return (
        <div>
            Anime Home!
            {console.log("Home props", props)}
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
    mapStateToProps,{
      
    }
)(Home);