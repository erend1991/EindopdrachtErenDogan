import './Header.css'


function Header({img, alt, title, subtitle}) {

    return (
        <header>
            {img && <img src={img} alt={alt}/>}
            {title && <h1>{title}</h1>}
            {subtitle && <h2>{subtitle}</h2>}
        </header>
    )
}

export default Header