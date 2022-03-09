import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetch() {
//   const [posts, setPosts] = useState([]);
const [post, setPost] = useState({})
const [id, setId] = useState(1)
const [fetchFromButton, setFetchFromButton] = useState(1)

// Id is passed into this function so that when clicked the setId is triggered
   const handleFetch = () => {
       setFetchFromButton(id)
   }

  useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${fetchFromButton}`).then(response => {
          setPost(response.data)
          console.log(response)

      }).catch((error) =>{
          console.log(error)
      })
  }, [fetchFromButton]); //dependency is rendered after every changes
  return <div>

      <input type="text" value={id} onChange={e => setId(e.target.value)}/>
      <button type="submit" onClick={handleFetch}>Get Post</button>
      <h1>{post.title}</h1>
      {/* <ul>
          {
              posts.map((post) => <li key={post.id}>{post.title}</li>)
          }
      </ul> */}
  </div>;
}

export default DataFetch;
