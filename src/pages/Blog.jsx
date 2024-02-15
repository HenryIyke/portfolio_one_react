import React, { useEffect, useState } from "react";
import "../index.css";
import SearchBar from "../components/SearchBar";

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await response.json();
        console.log(posts);
        setData(posts);
        return (posts);
      };
      fetchData();
    } catch (error) {
      console.log("Error Discovered:", error);
    }
  }, []);

  return (
    <main className="container_pd">
      <SearchBar placeholder="Enter ID to search" datum={data}/>
        <div className="Blog_page">
          {data.map((post) => (
            <div key={post.id} className="Blog_news_card">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
    </main>
  );
};

export default Blog;
