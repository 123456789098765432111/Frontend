import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import {useContext, useEffect, useState} from "react";
import {CartContext} from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import { useSession } from "next-auth/react";
import {signOut} from "next-auth/react";
import Button from "./Button";
import { useRouter } from "next/router";
import { data } from "autoprefixer";
const StyledHeader = styled.header`
  background-color: #222;
`;
const Logo = styled(Link)`
  color:#fff;
  text-decoration:none;
  position: relative;
  z-index: 3;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  ${props => props.mobileNavActive ? `
    display: block;
  ` : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
const NavLink = styled(Link)`
  display: block;
  color:#aaa;
  text-decoration:none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding:0;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border:0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const {cartProducts} = useContext(CartContext);
  const [mobileNavActive,setMobileNavActive] = useState(false);
  const {data:session} = useSession()
  const [Logaut,setLogout] = useState(false);
  const router = useRouter();
  function logout() {
    setLogout(true);
    signOut().then(() => {
      setLogout(false); // Oturumu kapatma işlemi tamamlandıktan sonra Logaut durumunu güncelle
    }).catch((error) => {
      console.error('Sign out error:', error);
      setLogout(false); // Hata durumunda da durumu güncelle
    });
  }
  
 
  return (
    <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
           
            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            
            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
          </div>
          <div class="hidden sm:ml-6 sm:block">
          <div>
       <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><span className="nav-link px-2 link-secondary"><NavLink href={'/'}>Home</NavLink></span></li>
          <li><span className="nav-link px-2 link-body-emphasis"><NavLink href={'/products'}>All products</NavLink></span></li>
          <li><span className="nav-link px-2 link-body-emphasis"><NavLink href={'/Video'}>All Video</NavLink></span></li>
          <li><span className="nav-link px-2 link-body-emphasis"> <NavLink href={'/categories'}>Categories</NavLink></span></li>
          <li><span className="nav-link px-2 link-body-emphasis">  <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink></span></li>
        </ul>
       </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">View notifications</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </button>
  
          <div class="relative ml-3">
          { 
        session ?
        <div className="dropdown" style={{cursor:"pointer"}} >
          <a  className="text-decoration-none "style={{width:"35px",height:"33px",display:"flex",justifyContent:"center",backgroundColor:
          "red",borderRadius:"50%",alignItems:"center",color:"#fff"}}  data-bs-toggle="dropdown" aria-expanded="false">
            {session?.user?.email?.slice(0,2).toLocaleUpperCase()}
          </a>
          <ul className="dropdown-menu text-small " >
            <li><span className="dropdown-item">Settings</span></li>
            <li><span className="dropdown-item"><NavLink href={'/Profile'}>Profile</NavLink></span></li>
            <li><hr className="dropdown-divider"/></li>
            <li><button className="dropdown-item" onClick={logout}>Sign out</button></li>
          </ul>
        </div>
        :
        <Link href={'/account'}><button className="btn btn-outline-primary">SignIn</button></Link>
          
        }
          </div>
        </div>
      </div>
    </div>
  
    <div class="sm:hidden" id="mobile-menu">
    <div>
       <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><span className="nav-link px-2 link-secondary"><NavLink href={'/'}>Home</NavLink></span></li>
          <li><span className="nav-link px-2 link-body-emphasis"><NavLink href={'/products'}>All products</NavLink></span></li>
          <li><span className="nav-link px-2 link-body-emphasis"><NavLink href={'/Video'}>All Video</NavLink></span></li>
          <li><span className="nav-link px-2 link-body-emphasis"> <NavLink href={'/categories'}>Categories</NavLink></span></li>
          <li><span className="nav-link px-2 link-body-emphasis">  <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink></span></li>
        </ul>
       </div>
    </div>
  </nav>
  
    );
  }
  //   <header className="p-3 mb-3 border-bottom">
  //   <div  style={{width:"1400px",margin:"0 auto"}}>
  //     <div className="d-flex justify-content-between">
  //     <div>
  //     <span className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
  //       <NavLink   href={'/'}>  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png "  style={{width:"50px",height:"40px"}}/></NavLink>
  //       </span>
  //     </div>

  //     <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between justify-content-lg-start">

  //       <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
  //         <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
  //       </form>
  //       <label className="swap swap-rotate">
            
  //           {/* this hidden checkbox controls the state */}
  //           <input type="checkbox" className="theme-controller" value="synthwave" />
            
  //           {/* sun icon */}
  //           <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
            
  //           {/* moon icon */}
  //           <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
            
  //         </label>
 
          
      
  //     </div>
  //     </div>
  //   </div>
  // </header>
