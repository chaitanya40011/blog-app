import { useLocation } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../../components/Footer";
import "./home.css";
import { url } from "../../url";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  const [posts, setPosts] = useState([]);
  // const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(process.env.REACT_APP_API_URL+"/posts");
      console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Footer />
      </div>
    </>
  );
}
