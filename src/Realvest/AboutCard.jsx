import React from 'react'
import Button from './Button'

function AboutCard() {
    return (
        <div>

            <div className='About' style={{
                width: "90%",
                margin: "auto",
                display: 'flex',
                justifyContent: "space-between",


            }}>
                <div style={{
                    width: "40%",
                    marginTop: "100px"
                }}>
                    <p style={{
                        color: "#FF6600",
                        backgroundColor: "#FFF0E6",
                        width: "30%",
                        padding: "8px",

                    }}>About RealVest</p>
                    <h1 style={{
                        width: "100%",
                        fontSize: "50px",
                        paddingBottom: "20px"
                    }}>About Our Real Estate</h1>
                    <p style={{
                        color: "#FF6600",
                        fontSize: "20px",
                        fontWeight: "bold",
                    }}>Finding great properties for investment</p>
                    <p style={{
                        fontSize: "15px",
                        color: "#8B8989",
                        paddingBottom: "50px"

                    }}>we specialize in providing a streamlined platform for real estate investors to discover lucrative opportunities. Our user-friendly interface offers access to a diverse range of properties, complete with detailed analytics and expert guidance to help you make informed decisions. Whether you're a seasoned investor or just getting started,
                        RealVest is your trusted partner for success in the real estate market</p>
                    <Button To={"/about"} text={"Discover More"} />

                </div>
                <div style={{
                    width: "50%",
                }}>
                    <div className='shadow' style={{
                        width: "300px",
                        position: "relative",
                        padding: "15px",
                        borderRadius: "15px",
                        backgroundColor: "#ffff",
                        top: "170px",
                        right: "100px"

                    }}>
                        <h1>20<span>%</span></h1>
                        <p style={{
                            fontSize: "23px"
                        }}>Average Profit Upto</p>
                    </div>


                    <img style={{
                        width: "100%",
                        height: "600px",
                        border: "10px solid #FF6600",
                        borderTopLeftRadius: "200px"
                    }} src="https://script.viserlab.com/realvest/assets/images/frontend/about/65c46856b5a681707370582.jpg" alt="" />

                    <div style={{

                        width: "400px",
                        position: "relative",
                        bottom: "180px",
                        left: "90px",

                        padding: "20px",

                        borderRadius: "15px",
                        backgroundColor: "#ffff",
                        display: "flex",
                        gap: "20px",
                        alignItems: "center"

                    }}>
                        <div> <h1>3K <span>+</span></h1>
                            <p>Investors</p> </div>



                        <img src="https://script.viserlab.com/realvest/assets/images/frontend/about/65c4685716ce41707370583.png" alt="" />


                    </div>
                </div>


            </div>



        </div>
    )
}

export default AboutCard