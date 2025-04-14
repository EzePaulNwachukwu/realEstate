import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

function Header(props) {
    return (
        <div className='shadow ' style={{
            color: "white"
        }}>
            <header className="header" style={{
                width: "90%",
                margin: "auto",
                display: "flex",
                padding: "20px 0px 20px 0px",
                justifyContent: "space-between",
                alignItems:"center"

            }}>
                <Link to={"/home"}> <img style={{
                    width: "150px",
                }} src="https://script.viserlab.com/realvest/assets/images/logo_icon/logo.png" alt="" /></Link>
                
                <div style={{
                    display: "flex",
                    gap: "50px",
                    alignItems:"center"
                }}>
                    <nav style={{
                        display: "flex",
                        gap: "50px",
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

                    <Button To={"/login"} text={"Login"}/>

                </div>

            </header>
        </div>
    )
}

// Header.propTypes = {}

export default Header
