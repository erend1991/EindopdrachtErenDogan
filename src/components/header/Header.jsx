// import React from "react";
import food1 from "../../assets/food1.jpg"
import food2 from "../../assets/food2.jpg"
import food3 from "../../assets/food3.jpg"
import food4 from "../../assets/food4.jpg"
import './Header.css'
const images =   [food1, food2, food3, food4]

const Header = () => {
    return(
        <div className='outer-header-content'>
            <div className= 'inner-header-container'>
                 <img src={images[Math.floor(Math.random() * images.length)]} alt="image" className='w-full h-full object-cover' />
            </div>
        </div>

    )
}

export default Header