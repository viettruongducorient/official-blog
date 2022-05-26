import React, {useState, useEffect} from "react";
import Api from "../../api/api"

const Blog = () => {
  const [data, setData] = useState([]);

  async function getBlogList() {
    try {
      const response = await Api.getBlogList();
      setData(response.data.items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBlogList();
  }, []);

  return (
    <div>
      {data.map(blog => {
        return (
          <ul key={blog.id} className="list-unstyled">
            <li className="media">
              <img src={blog.image.url} style={{width:"200px"}} className="mr-3" alt="..." />
              <div className="media-body">
                <h5 className="mt-0 mb-1">List-based media object</h5>
                {blog.content}
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  )
}

export default Blog;
