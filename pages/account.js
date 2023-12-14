"use client"
import Header from '@/components/Header'
import { useSession, signIn, signOut } from "next-auth/react"
import React from 'react'

const Account = () => {
  const {data:session} = useSession()
  console.log(session);
  if (!session) {
    return (
      <>
      <Header />
      <div className="bg-bgGray w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-lg">Login with Google</button>
        </div>
      </div>
      </>
    );
  }else{
    return(
      <>
        <div>
          <Header/>
        </div>
      </>
    )
  }
}

export default Account