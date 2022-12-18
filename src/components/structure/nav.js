import React from "react"
import {Link} from "gatsby"
import PropTypes from "prop-types"
import {StaticImage} from "gatsby-plugin-image";

const NavBar = ({siteTitle, menuLinks}) => (

    <header style={{background: "#6564a5"}}>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{
            background: "#2c1f6d",
            marginBottom: "1.45rem",
        }}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-white">
                  <StaticImage src={'../../images/gatsby-icon.png'} className={'rounded-5 mx-4'} alt={'The MicroPasts logo'} width={25} height={25}/>
                  The Bronze Age Index
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className={"navbar-toggler-icon"}></span>
                </button>
                <div className={"collapse navbar-collapse"} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {menuLinks.map(link => (
                            <li className="nav-item" key={link.id}>
                                <a href={link.link} style={{color: `white`}} className={"nav-link"} to={link.link} >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>

    </header>
)

NavBar.propTypes = {
    siteTitle: PropTypes.string,
    menuLinks: PropTypes.array
}

NavBar.defaultProps = {
    siteTitle: ``,
    menuLinks: ``
}

export default NavBar
