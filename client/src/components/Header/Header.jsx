import React from 'react'
import "./Header.css";

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">BLOG</span>
        </div>
      <img className="headerImg" src="https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg" alt="" />
    </div>
  )
}
