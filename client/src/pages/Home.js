import React, { useEffect, useState } from "react";
import axios from "axios";
import '../App.css';
import matchaImg from '../assets/latte.jpg'
import popMatcha from '../assets/matcha.jpg'
import strawbMatcha from '../assets/strawb.jpg'
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className="App">
            <div className="banner">
                <div className="navbar">
                    <h1 id="store-name">the matcha room</h1>
                    <ul className="nav-links">
                        <li><a href="/">home</a></li>
                        <li><a href="/menu">menu</a></li>
                        <li><a href="/about">about</a></li>
                        <li><a href="/contact">contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="matcha-wrapper">
                <div className="order-box">
                    <h2 id="order">Order for Pick Up Today</h2>
                    <p>Now offering pickup on both East and West campus!</p>
                    <Link to="/order-form">
                        <button id="order-btn">Order Now</button>
                    </Link>
                </div>
                <img src={matchaImg} alt="Matcha" className="responsive-img" />
            </div>
            
            <div className="favorites">
                <h2 id="popular-txt">Our Most Popular</h2>
                <div className="popImgs">
                    <div className="pop-img-container">
                        <img src={popMatcha} alt="Matcha" className="pop-img" />
                        <p className="caption">Classic Matcha</p>
                    </div>
                    <div className="pop-img-container">
                        <img src={strawbMatcha} alt="Strawberry Matcha" className="pop-img" />
                        <p className="caption">Strawberry Matcha</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Home;
