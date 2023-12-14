import { useSession, signIn, signOut } from "next-auth/react"
import {useState} from "react";
import Header from "./Header";
import UsersAccaunt from "./UsersAccaunt";

export default function Layout({children}) {
//   const [showNav,setShowNav] = useState(false);


  return (
    <div >  
    <Header/>
      <div style={{margin:"0 auto"}}>
        <div style={{margin:"0 auto",gap:"30px"}} class="relative flex   items-center rounded-[20px] w-100 h-[100%] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none ">
        <UsersAccaunt/>
        <div style={{zIndex:"999",display:"flex",justifyContent:"center"}}>
          {children}
        </div>
        </div>
      </div>
    </div>
  );
}