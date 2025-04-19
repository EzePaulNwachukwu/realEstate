import React from 'react'
import Button from './Button'

function AboutCard() {
    return (
        <div>

            <div className='About row  container-xl m-auto ' style={{ 
                justifyContent: "space-between",
            }}>
                <div className='col-lg-5 col-sm-12  ' style={{

                    marginTop: "100px"
                }}>
                    <p style={{
                        color: "#FF6600",
                        backgroundColor: "#FFF0E6",
                        padding: "8px",
                    }} className='w-50'>About RealVest</p>
                    <h1 style={{
                        width: "100%",
                        paddingBottom: "20px"
                    }} className='fs-sm-1 fs-lg-4'>About Our Real Estate</h1>
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
                <div className=" col-lg-6 col-sm-12 " style={{
                    // width: "50%",

                }}>
                    <div className='shadow flotintabt1'>
                        <h1>20<span>%</span></h1>
                        <p >Average Profit Upto</p>
                    </div>


                    <img className='abtimage'  src="https://script.viserlab.com/realvest/assets/images/frontend/about/65c46856b5a681707370582.jpg" alt="" />

                    <div className='flotintabt2' >
                        <div> <h1>3K <span>+</span></h1>
                            <p>Investors</p> </div>

                        <img src="https://script.viserlab.com/realvest/assets/images/frontend/about/65c4685716ce41707370583.png" alt="" className='innerimg' />


                    </div>
                </div>


            </div>



        </div>
    )
}

export default AboutCard