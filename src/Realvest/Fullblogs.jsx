import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Sectionbanna from './Sectionbanna';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

function Fullblogs() {

    const { id } = useParams();
    const [post, setpost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [latest, setlatest] = useState([])

    useEffect(() => {
        fetch('/Propertiesss.json')
            .then((res) => res.json())
            .then((data) => {
                setpost(data[0].blogs.find((item) => item.id == id));
                setlatest(data[0].blogs)
            });
        setInterval(() => {
            setLoading(true)
        }, 3000)
    }, [id]);

    return (

        <div style={{ backgroundColor: "#F5F5F5" }}>

            <Sectionbanna section={post.title} />

            {
                loading ?
                    (<div className='container' style={{ display: "flex", justifyContent: "space-between", paddingTop: "100px", paddingBottom: "100px" }}>
                        <div className='left' style={{ width: "60%", backgroundColor: "white", padding: "20px", marginTop: "15px", borderRadius: "10px", marginBottom: "20px" }}>
                            <div>
                                <img src={post.images} alt="post" style={{ width: "100%", borderRadius: "15px", marginBottom: "50px" }} />
                            </div>
                            <h3>{post.title}</h3>
                            <b>{post.p1.h1}</b>
                            <p>{post.p1.p}</p>
                            <b>{post.p2.h1}</b>
                            <p>{post.p2.p}</p>
                            <b>{post.p3.h1}</b>
                            <p>{post.p3.p}</p>
                            <b>{post.p4.h1}</b>
                            <p>{post.p4.p}</p>
                        </div>

                        <div className='right' style={{ width: "35%", height: "750px", backgroundColor: "white", padding: "30px", marginTop: "15px", borderRadius: "10px", marginBottom: "20px" }}>
                            <h3>Latest Posts</h3>
                            {
                                latest.map((item, index) => (
                                    <div style={{ display: "flex", gap: "10px", marginTop: "20px", }}>
                                        <img src={item.images} alt="post" style={{ width: "100px", borderRadius: "10px" }} />
                                        <div>
                                            <Link style={{ textDecoration: "none", color: "black" }}>{item.title}</Link>
                                            <p style={{ color: "#ff6600" }}><span style={{ marginRight: "10px" }}><FontAwesomeIcon icon={faCalendar} /></span>{item.date.week}  {item.date.day}  {item.date.month}  {item.date.year}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>


                    </div>) : (<div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>)
            }


        </div>

    )
}

export default Fullblogs