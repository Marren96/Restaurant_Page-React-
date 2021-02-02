import React from 'react'

const styleButton = {
    marginTop : '350px',
    marginLeft : '300px',
    width : '200px',
    height : '50px',
    fontSize : '15px',
    fontWeight : 900,
    outline : 'none',
    cursor : 'pointer',
    transition: 'all .5 ease',
    border : '1px solid white'
}



const Home = () => {
    return (
        <div className = 'home-container'>
            <button style = {styleButton}>RESERVE TABLE</button>
        </div>
    )
}

export default Home;