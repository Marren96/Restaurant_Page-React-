import React from 'react'



const Nav = () => {
    return (
        <nav className = 'nav-container'>
            <div className = 'logo-container'>
                <h1>URBANDINE</h1>
            </div>
            <div className = 'route-container'>
               
                <div className = 'route1'><a href = '/Home'>Home</a></div>
                <div className = 'route2'><a href = '/Menu'>Menu</a></div>
                <div className = 'route2'><a href = '/Local'>Local</a></div>
                <div className = 'route2'><a href = '/Contact'>Contact</a></div>
                
            </div>
        </nav>
    )
}
export default Nav;