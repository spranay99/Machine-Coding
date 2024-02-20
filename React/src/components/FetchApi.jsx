import React, { useState, useEffect } from "react";

const FetchApi = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=15"
        );
        if (!result.ok) {
          throw new Error(`Error is ${result.status} and ${result.statusText}`);
        }
        const data = await result.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="App">
      <h1>Posts</h1>
      <input
        type="text"
        placeholder="Search posts"
        onChange={(e) => setInput(e.target.value.toLowerCase())}
      />
      {posts
        .filter((post) => {
          return post.title.includes(input);
        })
        .map((post) => {
          return (
            <p>
              {post.id}. {post.title}
            </p>
          );
        })}
    </div>
  );
};

export default FetchApi;
