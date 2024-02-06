import React, { useEffect, useState } from 'react'
import {Link as RouterLink} from "react-router-dom"
import "./Navbar.css"
import healthlogo from "./assets/healthlogo.png"
export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrolled = window.scrollY;
        // console.log(scrolled)
         // console.log(scrolled)
        if (scrolled > 20) {
          document.querySelector(".Navbar").style.backgroundColor = "black";
        }
          if(scrolled<20){
       
        document.querySelector(".Navbar").style.background= "rgb(34,11,56)";
       
       
    }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    
    
    let mylink=[
      {
          title: "Home",
          path: "/"
      },
      {
          title: "Service",
          path: "/boxing"
      },
      {
          title: "Blog",
          path: "/"
      },
      {
        title: "About",
        path: "/"
    }
     
    
    ]
  
    return (
        <div className="Navbar">
        <img id='logo1' src={healthlogo} alt="" />
      <div className={`nav-items ${isOpen && "open"}`}>
         
  
  
  {
      mylink.map((e)=>(<RouterLink key={e.path} to={e.path}>{e.title}</RouterLink>))
     }
        </div>
        <div id='btns'>
        <button id="register">Book Now</button>
       
        </div>
        
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    );
  }
