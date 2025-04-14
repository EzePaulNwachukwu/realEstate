import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Sectionbanna from './Sectionbanna';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Investorscard from './Investorscard';
import Notfoundpage from './Notfoundpage';

function Details() {
    function getRandomItems(array, count = 6) {
        return array.sort(() => Math.random() - 0.5).slice(0, count);
    }

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [latest, setlatest] = useState([])
    const [investors, setinvestors] = useState([])

    useEffect(() => {
        fetch('/Propertiesss.json')
            .then((res) => res.json())
            .then((data) => {
                setProduct(data[0].products.find((item) => item.id == id));
                setlatest(getRandomItems(data[0].products))
                setinvestors(data[0].investors)
            });
        setInterval(() => {
            setLoading(true)
        }, 3000)
    }, [id]);
    console.log(investors)



    if (!product) return <h1><Notfoundpage /></h1>;

    return (
        <div style={{ backgroundColor: "#F5F5F5" }}>
            <Sectionbanna section={"Property Details"} />

            {
                loading ? (
                    <div className='container' style={{ display: "flex", justifyContent: "space-between", paddingTop: "100px", paddingBottom: "100px" }}>
                        <div style={{ width: "55%" }}>

                            <div style={{ backgroundColor: "white", padding: "20px", marginTop: "15px", borderRadius: "10px", marginBottom: "20px" }}>

                                <h3>{product.tittle}</h3>
                                <p><span style={{ color: "#ff6600", marginRight: "10px" }}><FontAwesomeIcon icon={faLocationDot} /></span>{product.location}</p>
                                <div id="carouselExampleIndicators" className="carousel slide">
                                    <div className="carousel-indicators">

                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">  <img src={product.images.building} className="d-block w-100" alt="..." />  </button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">   <img src={product.images.building} className="d-block w-100" alt="..." /> </button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">   <img src={product.images.kitchen} className="d-block w-100" alt="..." /> </button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4">  <img src={product.images.palor} className="d-block w-100" alt="..." />  </button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5">   <img src={product.images.restroom} className="d-block w-100" alt="..." /> </button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"> <img src={product.images.room} className="d-block w-100" alt="..." /> </button>
                                    </div>

                                    <div className="carousel-inner" style={{ backgroundColor: "white", padding: "10px", marginTop: "15px" }}>
                                        <div className="carousel-item active">
                                            <img src={product.images.building} className="d-block w-100 " alt="..." style={{ borderRadius: "20px" }} />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={product.images.dinning} className="d-block w-100" alt="..." style={{ borderRadius: "20px" }} />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={product.images.kitchen} className="d-block w-100" alt="..." style={{ borderRadius: "20px" }} />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={product.images.palor} className="d-block w-100" alt="..." style={{ borderRadius: "20px" }} />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={product.images.restroom} className="d-block w-100" alt="..." style={{ borderRadius: "20px" }} />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={product.images.room} className="d-block w-100" alt="..." style={{ borderRadius: "20px" }} />
                                        </div>

                                    </div>

                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span aria-hidden="true" style={{ fontSize: "30px", backgroundColor: "#ff6600", paddingLeft: "10px", paddingRight: "10px", borderRadius: "50%" }}><FontAwesomeIcon icon={faAngleLeft} /></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span aria-hidden="true" style={{ fontSize: "30px", backgroundColor: "#ff6600", paddingLeft: "10px", paddingRight: "10px", borderRadius: "50%" }}> <FontAwesomeIcon icon={faAngleRight} /></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>




                                </div>


                            </div>

                            <div style={{ backgroundColor: "white", padding: "20px", marginTop: "15px", borderRadius: "10px", marginBottom: "20px" }}>
                                <h3>Property description</h3>

                                <p>{product.PropertyDescription.p1}</p>
                                <p>{product.PropertyDescription.p2}</p>
                                <p>{product.PropertyDescription.p3}</p>
                                <p>{product.PropertyDescription.p4}</p>
                                <p>{product.PropertyDescription.p5}</p>
                                <p>{product.PropertyDescription.p6}</p>
                                <p>{product.PropertyDescription.p7}</p>

                                <div>
                                    <h3>Location</h3>
                                </div>
                            </div>

                            <div style={{ backgroundColor: "white", padding: "20px", marginTop: "15px", borderRadius: "10px", marginBottom: "20px" }}>
                                <p>share</p>
                            </div>

                        </div>

                        <div className='left' style={{ width: "43%" }}>
                            <div>
                                <h3>{product.price}</h3>
                                <p>Per share amount</p>
                            </div>

                            <button style={{ width: "100%", backgroundColor: "#ff6600", padding: "15px", borderRadius: "10px", border: "none" }}>  <Link style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>Invest Now</Link> </button>

                            <div className='card-body' style={{ backgroundColor: "white", padding: "20px", marginTop: "20px", borderRadius: "10px" }}>
                                <div>
                                    <p>Available share:</p>
                                    <div style={{ height: "10px", backgroundColor: "#FFF0E6" }} className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                        <div style={{ backgroundColor: "#ff6600", width: product.progressbar, }}></div>
                                    </div>
                                    <p style={{ fontSize: "12px" }}>{product.investors}</p>
                                </div>

                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <p>Investment Type</p>
                                    <p>{product.InvestmentType}</p>
                                </div><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <p>Down Payment</p>
                                    <p>{product.DownPayment}</p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <p>Initial Invest Amount</p>
                                    <p>{product.InitialInvestAmount}</p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <p>Total Installments</p>
                                    <p>{product.TotalInstallments}</p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <p>Per Installment Amount</p>
                                    <p>{product.PerInstallmentAmount}</p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <p>Installment Schedule</p>
                                    <p>{product.InstallmentSchedule}</p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <p>Installment Late Fee</p>
                                    <p>{product.InstallmentLateFee}</p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <p>Profit Repeat</p>
                                    <p>{product.ProfitRepeat}</p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <p>Profit Schedule</p>
                                    <p>{product.repeatSchedule}</p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <p>Profit Back</p>
                                    <p>{product.ProfitBack}</p>
                                </div>

                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <p>Capital Back</p>
                                    <p>{product.CapitalBack ? (<p>Yes</p>) : (<p>No</p>)}</p>
                                </div>

                            </div>

                            <div style={{ backgroundColor: "white", padding: "20px", marginTop: "15px", borderRadius: "10px" }}>
                                <h3>Property Video</h3>

                                <div>
                                    <iframe width="100%" height="300" src={product.video} title="Real Estate Video Tour |  Sony A7siii | Toronto, Ontario" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>

                            </div>


                            <div style={{ backgroundColor: "white", padding: "20px", marginTop: "20px", borderRadius: "10px" }}>

                                <div>
                                    <div style={{ paddingBottom: "10px" }}>
                                        <h3>Real Estate Investor</h3>
                                    </div>

                                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <Investorscard image={investors[0].image} location={investors[0].location} yearjoined={investors[0].year} propertyowned={investors[0].properties} investor={investors[0].name} />
                                            </div>
                                            <div className="carousel-item">
                                                <Investorscard image={investors[1].image} location={investors[1].location} yearjoined={investors[1].year} propertyowned={investors[1].properties} investor={investors[1].name} />

                                            </div>
                                            <div className="carousel-item">
                                                <Investorscard image={investors[2].image} location={investors[2].location} yearjoined={investors[2].year} propertyowned={investors[2].properties} investor={investors[2].name} />

                                            </div>
                                            <div className="carousel-item">
                                                <Investorscard image={investors[3].image} location={investors[3].location} yearjoined={investors[3].year} propertyowned={investors[3].properties} investor={investors[3].name} />
                                            </div>
                                            <div className="carousel-item">
                                                <Investorscard image={investors[4].image} location={investors[4].location} yearjoined={investors[4].year} propertyowned={investors[4].properties} investor={investors[4].name} />
                                            </div>
                                        </div>

                                        <button style={{ color: "#ff6600" }} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                            <span aria-hidden="true"> <FontAwesomeIcon icon={faAngleLeft} /></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button style={{ color: "#ff6600" }} className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                            <span aria-hidden="true" ><FontAwesomeIcon icon={faAngleRight} /></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>

                                    </div>
                                </div>

                            </div>

                            <div style={{ backgroundColor: "white", padding: "20px", marginTop: "15px", borderRadius: "10px" }}>
                                <h3>Latest Property</h3>
                                {
                                    latest.map((late) => (

                                        <div style={{ display: "flex", gap: "20px", alignItems: "center", marginTop: "20px" }}>
                                            <Link to={`/details/${late.id}`}><img src={late.images.building} alt="" style={{ width: "120px", borderRadius: "10px", }} /></Link>
                                            <div className="property-details-card__content ">
                                                <h6 className="title">
                                                    <Link to={`/details/${late.id}`} style={{ textDecoration: "none", color: "#ff6600" }}>
                                                        {late.tittle}
                                                    </Link>
                                                </h6>
                                                <div className="location">
                                                    <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "10px" }} />

                                                    <span>{late.location}</span>
                                                </div>
                                                <span className="price">
                                                    {late.price}
                                                </span>
                                            </div>

                                        </div>
                                    ))
                                }

                            </div>






                        </div>

                    </div>) : (<><div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div></>)
            }

        </div>
    )
}

export default Details