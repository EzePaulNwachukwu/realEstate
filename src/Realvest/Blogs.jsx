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
    <div >

      <Sectionbanna section={"Blogs"} />
      <div  className=" row blogpage "  >

        {
          posts.map((post) => (
            <Blogscard image={post.images} title={post.title} goto={`/blogpost/${post.id}`}  p1={post.p1.p} day={post.date.day} month={post.date.month}/>
          ))
        }

      </div>

    </div>
  )
}

export default Blogs