import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <p>
        Blogging is the process that implies creating articles, photos, and other forms of content and publishing them on a website. Its characteristics include informal language, a laid-back atmosphere, regular updates, lifehacks, tips, and a high level of customer engagement.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}