import React from "react"
import { Link, NavLink } from "react-router-dom"
import Style from "./Nav.module.css"
import { useContext } from "react";
//import { AuthContext } from "../Context/AuthContext";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";



export const Navbar = () => {
  const [data, setData] = useState([])
  //const {cartData ,logoutUser, isState}= useContext(AuthContext)
 


  return (
    <div
       className={Style.nav}
    >
      <div  className={Style.myNext}>
        <div className={Style.logo}>
          <img src="https://pngimg.com/uploads/computer_pc/small/computer_pc_PNG102128.png"/>
        </div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/#">LapTop</NavLink>
      <NavLink to="/#">DeskTop</NavLink>
      <NavLink to="/#">Accessories</NavLink>
      <NavLink to="/#">Software</NavLink>
        <div className={Style.catdata}>
        <NavLink to="/#">
            <FaShoppingCart className={Style.Shppgcart} />
         </NavLink>
         {/* <div className={Style.busket}> {cartData.length}</div> */}
          </div>
      </div>
     
       {/* one more div */}
       <div className={Style.travel} >
     
         <NavLink to="/#">Login</NavLink>
          

         <NavLink to="/#">FQA</NavLink>
         <NavLink to="/#">Contact</NavLink>
         <NavLink to="/#">About</NavLink>
       </div>
                   
    </div>
  );
};
