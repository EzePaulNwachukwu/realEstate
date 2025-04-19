import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'


function Header() {
    return (
        <div className='shadow ' style={{
            color: "white",
            position: "fixed-top",
            padding: "50px",
            backgroundColor: "white"
        }}>
            <header className='header '>
                <nav className="navbar   ">
                    <div className="container-fluid ">
                        <div style={{ display: "flex", gap: "150px" }}>

                            <Link to={"/home"}>
                                <img style={{
                                    width: "150px",
                                }} src="https://script.viserlab.com/realvest/assets/images/logo_icon/logo.png" alt="" /></Link>


                            <div className='headerleft'>
                                <nav style={{
                                    display: "flex",
                                    gap: "50px",
                                    alignItems: "center"
                                }}>
                                    <Link to={"/home"}>Home</Link>
                                    <Link to={"/about"}>About</Link>
                                    <Link to={"/Properties"}>Properties</Link>
                                    <Link to={"/blogs"}>Blogs</Link>
                                    <Link to={"/contact"}> Contact</Link>
                                </nav>
                                <div className="dropdown">
                                    <Link className="btn  dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="https://script.viserlab.com/realvest/assets/images/language/65f7c1a85f8f11710735784.png" alt="" />  English
                                    </Link>

                                    <ul className="dropdown-menu w-25">
                                        <li><Link className='dropdown-item'><img src="https://script.viserlab.com/realvest/assets/images/language/65f7c142e9bbc1710735682.png" alt="" />  Bangla</Link> </li>
                                        <li><Link className="dropdown-item"><img src="https://script.viserlab.com/realvest/assets/images/language/65f7c1ded01571710735838.png" alt="" />  splanish</Link></li>
                                        <li><Link className="dropdown-item"> <img src="https://script.viserlab.com/realvest/assets/images/language/66544cb2c45ab1716800690.png" alt="" />  Hindi</Link></li>
                                    </ul>
                                </div>

                                <Button To={"/login"} text={"Login"} />

                            </div>
                            <button className="navbar-toggler d-lg-none d-sm-flex " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon">  </span>
                            </button>
                        </div>

                        <div className="offcanvas offcanvas-end h-50" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <Link to={"/home"}>
                                    <img style={{
                                        width: "150px",
                                    }} src="https://script.viserlab.com/realvest/assets/images/logo_icon/logo.png" alt="" /></Link>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">

                                <div className="row mt-3 " >
                                    <div className="dropdown col-8">
                                        <Link className="btn  dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src="https://script.viserlab.com/realvest/assets/images/language/65f7c1a85f8f11710735784.png" alt="" />  English
                                        </Link>

                                        <ul className="dropdown-menu w-25">
                                            <li><Link className='dropdown-item'><img src="https://script.viserlab.com/realvest/assets/images/language/65f7c142e9bbc1710735682.png" alt="" />  Bangla</Link> </li>
                                            <li><Link className="dropdown-item"><img src="https://script.viserlab.com/realvest/assets/images/language/65f7c1ded01571710735838.png" alt="" />  splanish</Link></li>
                                            <li><Link className="dropdown-item"> <img src="https://script.viserlab.com/realvest/assets/images/language/66544cb2c45ab1716800690.png" alt="" />  Hindi</Link></li>
                                        </ul>
                                    </div>
                                    <div className='col-3'>
                                        <Button To={"/login"} text={"Login"} />
                                    </div>
                                </div>
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 nav2">
                                    <li className="nav-item">
                                        <Link to={"/home"}>Home</Link>

                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/about"}>About</Link>

                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/Properties"}>Properties</Link>

                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/blogs"}>Blogs</Link>

                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/contact"}> Contact</Link>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

// Header.propTypes = {}

export default Header
