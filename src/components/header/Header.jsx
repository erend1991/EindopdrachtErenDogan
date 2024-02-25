import food1 from "../../assets/food1.jpg"
import food2 from "../../assets/food2.jpg"
import food3 from "../../assets/food3.jpg"
import food4 from "../../assets/food4.jpg"
import './Header.css'
import {useEffect, useState} from "react";


const images =   [food1, food2, food3, food4]


function Header()  {

    const [randomImage, setRandomImage] = useState(null);


    useEffect(() => {
        setRandomImage(images[Math.floor(Math.random() * images.length)]);
    }, []);

    return(
        <div className='outer-header-content'>
            <div className= 'inner-header-container'>
                 <img src={randomImage} alt="image"  />
            </div>
        </div>

    )
}

export default Header