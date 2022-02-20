import axios from "axios";
import React from "react";

const baseURL = "http://localhost:3000/posts/1";

function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.content}</h1>
    </div>
  );
}

export default App;
