import React, { useState, useEffect } from "react";

const Blog = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    fetch("https://api-placeholder.herokuapp.com/api/v2/blogs")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setBlogList(data)
        console.log(blogList)
      });
  }, []);

  // const getBlogList = async() => {
  //   fetch("https://api-placeholder.herokuapp.com/api/v2/blogs")
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       setBlogList(data.data)
  //       console.log(blogList)
  //     });
  // }

  return (
    <div>
      {blogList && blogList.map((index, blog) => {
        return (
          <ul key={index} className="list-unstyled">
            <li className="media">
              <img src="..." className="mr-3" alt="..." />
              <div className="media-body">
                <h5 className="mt-0 mb-1">List-based media object</h5>
                {blog.content}
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
  // <ul className="list-unstyled">
  //   <li className="media">
  //     <img src="..." className="mr-3" alt="..." />
  //     <div className="media-body">
  //       <h5 className="mt-0 mb-1">List-based media object</h5>
  //       Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
  //       scelerisque ante sollicitudin. Cras purus odio, vestibulum in
  //       vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
  //       vulputate fringilla. Donec lacinia congue felis in faucibus.
  //     </div>
  //   </li>
  // </ul>
}

export default Blog;
