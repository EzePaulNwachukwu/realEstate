import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons/faHamburger';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function Header() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setShow(false); // scrolling down
            } else {
                setShow(true); // scrolling up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);


    const closeOffcanvas = () => {
        const offcanvasEl = document.getElementById('offcanvasTop');
        const offcanvasInstance = window.bootstrap?.Offcanvas.getInstance(offcanvasEl);
        if (offcanvasInstance) {
            offcanvasInstance.hide();
        }
    };
    return (

        <div className='w-100'>

            <header className={`header ${show ? "show" : "hide"} row  justify-content-between `} >

                <Link to={"/home"} className='col-lg-4  col-md-10 col-sm-11 w-25'>
                    <img style={{
                        width: "150px",
                    }} src="https://script.viserlab.com/realvest/assets/images/logo_icon/logo.png" alt="" />
                </Link>


                <nav className=' col-lg- d-lg-flex  col-sm-0  col-md-0 d-sm-none d-none w-25' style={{
                    display: "flex",
                    gap: "30px",
                    alignItems: "center"
                }}>
                    <Link to={"/home"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/Properties"}>Properties</Link>
                    <Link to={"/blogs"}>Blogs</Link>
                    <Link to={"/contact"}> Contact</Link>
                </nav>

                <div className='languageleft col-lg-2  d-sm-none d-lg-flex d-md-none d-none w-25 '>
                    <div className="dropdown col-lg-6">
                        <Link className="btn  dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://script.viserlab.com/realvest/assets/images/language/65f7c1a85f8f11710735784.png" alt="" />  English
                        </Link>

                        <ul className="dropdown-menu w-25">
                            <li><Link className='dropdown-item'><img src="https://script.viserlab.com/realvest/assets/images/language/65f7c142e9bbc1710735682.png" alt="" />  Bangla</Link> </li>
                            <li><Link className="dropdown-item"><img src="https://script.viserlab.com/realvest/assets/images/language/65f7c1ded01571710735838.png" alt="" />  spanish</Link></li>
                            <li><Link className="dropdown-item"> <img src="https://script.viserlab.com/realvest/assets/images/language/66544cb2c45ab1716800690.png" alt="" />  Hindi</Link></li>
                        </ul>
                    </div>
                    <Button To={"/login"} text={"Login"} />
                </div>


                <button class="navbar-toggler  d-lg-none col-sm-1 w-25 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">

                    <span style={{ fontSize: "40px", }}> <FontAwesomeIcon icon={faBars} /></span>

                </button>


            </header>



            <div class="offcanvas offcanvas-top " style={{ height: "550px" }} tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div class="offcanvas-header">
                    <Link to={"/home"} onClick={closeOffcanvas}>
                        <img style={{
                            width: "200px",
                        }} src="https://script.viserlab.com/realvest/assets/images/logo_icon/logo.png" alt="" /></Link>

                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div className="row mt-3 " >
                        <div className="dropdown col-8">
                            <Link className="btn  dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://script.viserlab.com/realvest/assets/images/language/65f7c1a85f8f11710735784.png" alt="" />  English
                            </Link>

                            <ul className="dropdown-menu w-25">
                                <li><Link className='dropdown-item'><img src="https://script.viserlab.com/realvest/assets/images/language/65f7c142e9bbc1710735682.png" alt="" />  Bangla</Link> </li>
                                <li><Link className="dropdown-item"><img src="https://script.viserlab.com/realvest/assets/images/language/65f7c1ded01571710735838.png" alt="" />  spanish</Link></li>
                                <li><Link className="dropdown-item"> <img src="https://script.viserlab.com/realvest/assets/images/language/66544cb2c45ab1716800690.png" alt="" />  Hindi</Link></li>
                            </ul>
                        </div>
                        <div className='col-3'>
                            <Button To={"/login"} text={"Login"} onClick={closeOffcanvas} />
                        </div>
                    </div>
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 nav2">
                        <li className="nav-item">
                            <Link to={"/home"} onClick={closeOffcanvas}>Home</Link>

                        </li>
                        <li className="nav-item">
                            <Link to={"/about"} onClick={closeOffcanvas}>About</Link>

                        </li>
                        <li className="nav-item">
                            <Link to={"/Properties"} onClick={closeOffcanvas}>Properties</Link>

                        </li>
                        <li className="nav-item">
                            <Link to={"/blogs"} onClick={closeOffcanvas}>Blogs</Link>

                        </li>
                        <li className="nav-item">
                            <Link to={"/contact"} onClick={closeOffcanvas}> Contact</Link>
                        </li>

                    </ul>
                </div>
            </div>



        </div>
    )
}


export default Header
