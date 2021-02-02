import React from 'react'

const styleMenuContainer = {
    textAlign : 'Center'
}

const styleImageContainer = {
    display : 'flex'
}

const styleImage = {
    width: '400px',
    height : '400px',
    marginTop : '100px',
    marginLeft : '50px'
}

const Menu = () => {
    return (
        <div className = 'menuContainer'style = {styleMenuContainer}>
            <h1>3 COURSE DINNER</h1>
            <p>You can move the text by dragging and dropping the Text Element anywhere on the page.</p>
            <div className = 'image-container' style = {styleImageContainer}>
                <img src = 'https://urbandine.templates.editmysite.com/uploads/8/9/5/0/89502725/course-1_1.png?345' alt = 'image' style = {styleImage}/ >
                <img src = 'https://urbandine.templates.editmysite.com/uploads/8/9/5/0/89502725/course-2_1.png?345' alt = 'image' style = {styleImage}/>
                <img src = 'https://urbandine.templates.editmysite.com/uploads/8/9/5/0/89502725/course-3_1.png?345' alt = 'image' style = {styleImage}/>
            </div>
            <p>Let visitors know how you’d like them to get and stay in touch.</p>
        </div>
    )
}
export default Menu;