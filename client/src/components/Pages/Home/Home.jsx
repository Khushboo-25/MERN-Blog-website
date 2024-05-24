import React from 'react';
import Header from "../../Header/Header.jsx";
import Posts from "../../Posts/Posts.jsx";
import Sidebar from '../../Sidebar/Sidebar.jsx';
// import Single from "../Single/Single.jsx";
import { useEffect, useState } from "react";
import "./Home.css";

import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
