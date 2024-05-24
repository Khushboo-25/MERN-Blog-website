import React from 'react'
import "./Single.css";
import SinglePost from '../../SinglePost/SinglePost.jsx';
import Sidebar from "../../Sidebar/Sidebar.jsx";

export default function Single() {
  return (
    <div className='single'>
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}
