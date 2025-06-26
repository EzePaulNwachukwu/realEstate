import React from 'react'
import Sectionbanna from './Sectionbanna'
import { useEffect, useState } from 'react'
import Blogscard from './Blogscard';




function Blogs() {

  const [posts, setposts] = useState([])

  useEffect(() => {
    fetch("Propertiesss.json")
      .then((response) => response.json())
      .then((data) => setposts(data[0].blogs))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(posts)
  return (
    <div style={{paddingTop:"80px"}} >

      <Sectionbanna section={"Blogs"} />
      <div className='container'>
         <div  className=" row  container-fluid  my-5 ">

        {
          posts.map((post) => (
             <div className='col-lg-4 col-md-6'>
            <Blogscard image={post.images} title={post.title} goto={`/blogpost/${post.id}`}  p1={post.p1.p} day={post.date.day} month={post.date.month}/>
           </div>
          ))
        }

      </div>  
      </div>
   

    </div>
  )
}

export default Blogs