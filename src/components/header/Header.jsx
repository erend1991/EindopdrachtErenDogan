
import './Header.css'




function Header({img, alt})  {

    return(
        <header> {img && <img src={img} alt={alt}/>}</header>
    )
}

export default Header